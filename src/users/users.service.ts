import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}
  async create(createUserInput: CreateUserInput): Promise<User> {
    const user = new this.userModel(createUserInput);
    return user.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id);
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    return this.userModel.findOneAndUpdate({ _id: id }, updateUserInput);
  }

  async remove(id: string): Promise<any> {
    return await this.userModel.deleteOne({ _id: id });
  }
}
