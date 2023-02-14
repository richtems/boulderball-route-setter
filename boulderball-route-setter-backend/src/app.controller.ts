import { Controller, Request, Post, UseGuards, Body, Get } from '@nestjs/common';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { AuthService } from './auth/auth.service';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNumberString, IsString } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { UsersService } from './users/users.service';
import { RouteMapsService } from './route-maps/route-maps.service';

class TestDto {
  @ApiProperty()
  foo: string;

  @ApiProperty()
  bar: number;
}

@Controller()
export class AppController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private routeMapsService: RouteMapsService,
  ) {
    try {
      
      // initialize some data
      //const user = usersService.create({
      //  displayname: "official",
      //  username: "official",
      //  password: "kuchenteig",
      //  email: "official@boulderroutesetter.com",
      //});
      
    } catch (error) {
      // just ignore if already in db
    }


  }

  @UseGuards(JwtAuthGuard)
  @Post('authtest')
  test(@Body() test: TestDto) {
    const testClass = plainToClass(TestDto, test);
    console.log(typeof testClass.bar === 'number');

    return 'hello world' + testClass.foo + testClass.bar;
  }
}
