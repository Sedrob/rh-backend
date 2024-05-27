import { Injectable,HttpException,HttpStatus, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '@entities/user/user.entity';
import { UserServices } from '@entities/user/user.service'; 
import { CreateUserDto } from '@entities/user/createUserDto';


@Injectable()
export class AuthService {

    constructor(private userService: UserServices,
                private jwtService: JwtService){}

    
    async login( userData: CreateUserDto) {
        const user = await this.validateUser(userData)
        return this.generateToken(user)
       

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

    private async generateToken(user: User) {
        const payload = {email: user.email, id: user.id}
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(userData: CreateUserDto){
        const user = await this.userService.getUserByEmail(userData.email)
        const passwordEquals = await bcrypt.compare(userData.password, user.password);
            if (User && passwordEquals) {
                return user;
            } 
            throw new UnauthorizedException({message: 'Некорректный логин или пароль'})
    }

}
