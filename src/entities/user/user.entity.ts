import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm' // PrimeryColumn - Без автоинкромента, с автоинкроментом PrimaryGeneratedColumn // UpdateDateColumn - изменениея @CreateDateColumn - создание строки 

import { UserRole } from '../role/role.entity'
import { UserFavoritesNews } from '@entities/userFavoritesNews/userFavoritesNews.entity'


@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ name: 'middle_name', type: 'text' })
    middleName: string

  @Column({ name: 'first_name', type: 'text' })
    firstName: string

  @Column({ name: 'last_name', type: 'text' })
    lastName: string

  @Column({ name: 'password_hash', type: 'varchar' })
    password: string

  @Column({ name: 'email', type: 'varchar' })
    email: string

  @Column({ name: 'pallada_id', type: 'integer', nullable: true })
    pallada: number

  @ManyToOne(() => UserRole, (userRole) => userRole.id,)//(OnDelete: 'CASCADE')
  @JoinColumn({ name: 'role_id'})  
    role: UserRole
}