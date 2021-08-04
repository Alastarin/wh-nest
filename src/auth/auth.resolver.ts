import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Token } from './entities/token.entity';
import { CreateAuthInput } from './dto/create-auth.input';
import { User } from '../users/entities/user.entities';
import { UseGuards } from '@nestjs/common/decorators';
import { GqlAuthGuard } from './guards/auth.guard';
import { CurrentUser } from './decorators/user.decorator';
import { UsersService } from '../users/users.service';

@Resolver(() => Token)
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Mutation(() => Token)
  async createAuth(@Args('createAuthInput') createAuthInput: CreateAuthInput) {
    return await this.authService.login(createAuthInput);
  }
  @Query(() => User)
  @UseGuards(GqlAuthGuard)
  whoAmI(@CurrentUser() user: User) {
    return this.usersService.findOne(user.id);
  }
}
