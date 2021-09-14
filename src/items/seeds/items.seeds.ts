import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { ItemsService } from '../items.service';

const Items = require('warframe-items');

@Injectable()
export class ItemsSeeds {
  constructor(private readonly itemsService: ItemsService) {}

  @Command({
    command: 'seed:items',
    describe: 'Seed items to DB from parser',
  })
  async seedItems() {
    // eslint-disable-next-line no-console
    console.log('Starting Seeding');
    console.time('Seeding');
    const items = new Items({ category: ['All'] });
    const itemsLength = items.length;
    const result = await this.itemsService.insertMany(items);
    console.timeEnd('Seeding');
    // eslint-disable-next-line no-console
    console.log(`Seeding ${result.length} / ${itemsLength}`);

    return items;
  }
}
