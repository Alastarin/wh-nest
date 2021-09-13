import { Injectable } from '@nestjs/common';
import { CreateItemInput } from './dto/create-item.input';
import { UpdateItemInput } from './dto/update-item.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from './schemas/item.schema';

const Items = require('warframe-items');
@Injectable()
export class ItemsService {
  constructor(
    @InjectModel(Item.name) private readonly itemModel: Model<Item>,
  ) {}
  create(createItemInput: CreateItemInput) {
    return 'This action adds a new item';
  }

  async findAll() {
    const items = new Items({ category: ['All'] });
    const itemsLength = items.length;
    for (let i = 0; i < itemsLength; i++) {
      const createdItem = new this.itemModel({ ...items[i] });
      await createdItem.save();
      // eslint-disable-next-line no-console
      console.log(i + '/' + itemsLength);
    }

    return items;
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
