import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !ValidationPipe.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);

    const formattedErrors = await this.toFormattedErrors(errors);

    //TODO Возможно стоит передавать Raw Errors в BadRequestException
    if (errors.length > 0) {
      throw new BadRequestException(formattedErrors);
    }
    return value;
  }

  async toFormattedErrors(errors: any[]) {
    const formattedErrors = {};
    errors.forEach((item) => {
      formattedErrors[item.property] = Object.values(item.constraints);
    });
    return await [formattedErrors];
  }

  private static toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
