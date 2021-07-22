import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  @MinLength(4)
  name: string;
  @Field(() => String)
  @IsEmail()
  email: string;
  @Field(() => String)
  @MinLength(4)
  password: string;
}
