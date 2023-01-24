import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
