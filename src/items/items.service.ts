import { Injectable } from '@nestjs/common';
import { UpdateItemInput } from './dto/update-item.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from './schemas/item.schema';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel(Item.name) private readonly itemModel: Model<Item>,
  ) {}
  async create(item) {
    const createdItem = new this.itemModel({ ...item });
    return await createdItem.save();
  }
  async insertMany(items) {
    return await this.itemModel.insertMany(items);
  }

  async findAll() {
    return 'all';
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemInput: UpdateItemInput) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
