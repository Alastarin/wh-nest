import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateAuthInput {
  @Field(() => String)
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @Field(() => String)
  @IsNotEmpty()
  password: string;
}
