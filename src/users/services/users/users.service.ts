import { Injectable } from '@nestjs/common';
import { CreateUserType } from '../../../utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'johndoe', email: 'john.doe@example.com' },
    { username: 'janedoe', email: 'jane.doe@example.com' },
  ];

  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return;
  }
}
