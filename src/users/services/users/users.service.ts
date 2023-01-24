import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'johndoe', email: 'john.doe@example.com' },
    { username: 'janedoe', email: 'jane.doe@example.com' },
  ];

  fetchUsers() {
    return this.fakeUsers;
  }
}
