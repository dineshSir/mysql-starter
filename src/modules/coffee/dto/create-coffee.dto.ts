import { IsNumber, IsString } from 'class-validator';
import { isNumber, isString } from 'util';

export class CreateCoffeeDto {
  @IsString()
  name: string;

  @IsNumber()
  quantity: number;
}
