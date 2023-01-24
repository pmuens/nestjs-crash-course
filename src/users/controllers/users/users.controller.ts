import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return [{ username: 'jdoe', email: 'jdoe@example.com' }];
  }

  @Get('posts')
  getUsersPost() {
    return [
      {
        username: 'jdoe',
        email: 'jdoe@example.com',
        posts: [
          {
            id: 1,
            title: 'Post 1',
          },
          {
            id: 2,
            title: 'Post 2',
          },
        ],
      },
    ];
  }

  @Get('posts/comments')
  getUsersPostsComments() {
    return [
      {
        id: 1,
        title: 'Post 1',
        comments: [
          {
            id: 1,
            title: 'Comment 1',
          },
          {
            id: 2,
            title: 'Comment 2',
          },
        ],
      },
    ];
  }
}
