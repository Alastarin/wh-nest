import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => String, { description: 'User ID' })
  id: string;
  @Field(() => String, { description: 'User name' })
  name: string;
  @Field(() => String, { description: 'User email' })
  email: string;
  @Field(() => String, { description: 'User password' })
  password: string;
}
