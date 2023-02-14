import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.repository.save({
      username: createUserDto.username,
      email: createUserDto.email,
      displayname: createUserDto.displayname,
      password: await bcrypt.hash(createUserDto.password, 10),
      myRouteMaps: [],
      favorites: [],
    });
  }

  findAll(): Promise<User[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.repository.findOneBy({ id: id });
  }

  findOneByUsername(username: string): Promise<User | null> {
    return this.repository.findOneBy({ username: username });
  }

  findOneByEmail(email: string): Promise<User | null> {
    return this.repository.findOneBy({ email: email });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UpdateResult> {
    return this.repository.update(id, {
      displayname: updateUserDto.displayname,
      username: updateUserDto.username,
      password: updateUserDto.password,
    });
  }

  remove(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
