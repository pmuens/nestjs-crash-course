import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  @Get(':id')
  getUserById(@Param('id') id: string) {
    console.log(id);
    return { id };
  }
}
