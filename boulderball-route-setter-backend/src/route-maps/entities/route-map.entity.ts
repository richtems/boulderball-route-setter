import { User } from '../../users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class RouteMap {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  difficulty: number;

  @Column('simple-array')
  routeDefinition: string[];

  @ManyToOne(() => User, (user) => user.myRouteMaps)
  creator: User;

  @ManyToMany(() => User)
  @JoinTable()
  favorites: User[];
}
