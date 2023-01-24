import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from '../../dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return [{ username: 'jdoe', email: 'jdoe@example.com' }];
  }

  @Post()
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData);
    return {};
  }
}
