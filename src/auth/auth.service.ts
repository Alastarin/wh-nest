import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { CreateAuthInput } from './dto/create-auth.input';
import { ConfigService } from '@nestjs/config';
import { User } from 'src/users/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}
  async validateUser(userId: string): Promise<User> {
    return await this.userService.findOne(userId);
  }
  async passwordValidate(loginPassword: string, userPassword: string) {
    return await bcrypt.compare(loginPassword, userPassword);
  }
  async login(createAuthInput: CreateAuthInput): Promise<any> {
    const user = await this.userService.findByEmail(createAuthInput.email);
    if (!user) {
      throw new NotFoundException();
    }
    const isPasswordValid = await this.passwordValidate(
      createAuthInput.password,
      user.password,
    );
    if (user && isPasswordValid) {
      return {
        accessToken: this.jwtService.sign({ email: user.email, sub: user.id }),
        expiresIn: this.configService.get<string>('expiresIn'),
        userName: user.name,
      };
    } else return null;
  }
}
