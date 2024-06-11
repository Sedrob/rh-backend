import { Injectable,HttpException,HttpStatus, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '@entities/user/user.entity';
import { UserServices } from '@entities/user/user.service'; 
import { CreateUserDto } from '@entities/user/createUserDto';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Tokens } from "./token.entity";
import { v4 } from 'uuid';


@Injectable()
export class AuthService {

    constructor(@InjectRepository(Tokens) private readonly authRepository: Repository<Tokens>,
                @InjectRepository(User) private readonly userRepository: Repository<User>,
                private userService: UserServices,
                private jwtService: JwtService){}

    
    async login( userData: CreateUserDto) {
        const user = await this.validateUser(userData)
        const accessToken = this.generateToken(user)
        const refreshToken = this.getRefreshToken(user.id)
        return  (await refreshToken).token
    }

    
    async registration( userData: CreateUserDto) {
        const candidate = await this.userService.getUserByEmail(userData.email);
        if (candidate) {
            throw new HttpException('Пользователь с такой почтой уже существует', HttpStatus.BAD_REQUEST) 
        } 
       
        const hashPassword = await bcrypt.hash(userData.password, 5);
        const user =  await this.userService.createUser({...userData, password: hashPassword})
        return this.generateToken(user)

    }

     async generateToken(user: User) {
        const accessToken = this.jwtService.sign ({email: user.email, id: user.id})
        return accessToken
    }

    private async validateUser(userData: CreateUserDto){
        const user = await this.userService.getUserByEmail(userData.email)
        const passwordEquals = await bcrypt.compare(userData.password, user.password);
            if (User && passwordEquals) {
                return user;
            } 
            throw new UnauthorizedException({message: 'Некорректный логин или пароль'})
    }

        async getRefreshToken (id: any): Promise<Tokens> {
        const refreshToken =  this.authRepository.save({
            user_id: id,
            token: v4()
        })  
        return refreshToken
    }
    public async getUserByEmail(id: any){
        const user = await this.authRepository.findOne({where: {id}})
        return user;
    }

    public async getInit(token: string){
        if (token){
            token = token.replace('token=', '')
        }
        else{
            return "Пользователь не авторизован"
        }
        const userid = await this.authRepository.findOne({
            select: [
                'id',
                'token',
                'user_id'
            ], 
            where: {token: token},
            relations: ['user_id','user_id.roles']
        })
        if (userid) {
            delete userid.user_id.password
        }
        else{
            return `Авторизация токена ${token} закончилась или не зарегестрирована`
        }
        return userid.user_id
    }
}


