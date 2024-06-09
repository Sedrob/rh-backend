import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm' // PrimeryColumn - Без автоинкромента, с автоинкроментом PrimaryGeneratedColumn // UpdateDateColumn - изменениея @CreateDateColumn - создание строки 
import { User } from '@entities/user/user.entity'



@Entity('Tokens')
export class Tokens {

  @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, (User) => User.id,)//(OnDelete: 'CASCADE')
    @JoinColumn({ name: 'user_id'})  
    user_id: User

  @Column({ name: 'token', type: 'text' })
    token: string

  
}