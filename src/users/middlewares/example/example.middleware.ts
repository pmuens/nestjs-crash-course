import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Example Middleware');

    const { authorization } = req.headers;

    if (!authorization) {
      throw new HttpException('No Authorization Token', HttpStatus.FORBIDDEN);
    } else if (authorization && authorization !== '12345678') {
      throw new HttpException(
        'Invalid Authorization Token',
        HttpStatus.FORBIDDEN,
      );
    }

    next();
  }
}
