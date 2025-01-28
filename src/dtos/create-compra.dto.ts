import { IsNotEmpty, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateItemCompraDto } from './create-item-compra.dto';

export class CreateCompraDto {
  @IsNumber()
  @IsNotEmpty()
  valorTotal: number;

  @ValidateNested({ each: true })
  @Type(() => CreateItemCompraDto)
  itens: CreateItemCompraDto[];
}
