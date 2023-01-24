import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserType } from '../../../utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { id: 1, username: 'johndoe', email: 'john.doe@example.com' },
    { id: 2, username: 'janedoe', email: 'jane.doe@example.com' },
  ];

  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return;
  }

  fetchUserById(id: number) {
    const user = this.fakeUsers.find((item) => item.id === id);

    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    return user;
  }
}
