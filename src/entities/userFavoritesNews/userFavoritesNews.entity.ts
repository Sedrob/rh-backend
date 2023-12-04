import { News } from '@entities/news/news.entity';
import { User } from '@entities/user/user.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany, OneToOne } from 'typeorm' 

@Entity('userFavoritesNews')
export class UserFavoritesNews{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id'})
    userId: User;

    @ManyToOne(() => News)
    @JoinColumn({ name: 'news_id'})
    newsId: News;

}