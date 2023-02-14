import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany } from 'typeorm';
import { RouteMap } from '../../route-maps/entities/route-map.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  email: string;

  @Column()
  displayname: string;

  @Column()
  password: string;

  @OneToMany(() => RouteMap, (routeMap) => routeMap.creator)
  myRouteMaps: RouteMap[]

  @ManyToMany(() => RouteMap)
  favorites: RouteMap[]
}
