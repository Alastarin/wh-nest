import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Token {
  @Field(() => String)
  accessToken: string;
  @Field(() => String)
  expiresIn: string;
  @Field(() => String)
  userName: string;
}
