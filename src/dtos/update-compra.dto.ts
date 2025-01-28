import { IsOptional, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateItemCompraDto } from './create-item-compra.dto';

export class UpdateCompraDto {
  @IsOptional()
  @IsNumber()
  valorTotal?: number;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateItemCompraDto)
  itens?: CreateItemCompraDto[];
}
