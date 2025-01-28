import { IsNotEmpty, IsNumber, IsEnum, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { enumStatusVenda } from '../enums/enumStatusVenda';
import { CreateItemVendaDto } from './create-item-venda.dto';

export class CreateVendaDto {
  @IsNumber()
  @IsNotEmpty()
  valorTotal: number;

  @IsEnum(enumStatusVenda)
  @IsNotEmpty()
  status: enumStatusVenda;

  @ValidateNested({ each: true })
  @Type(() => CreateItemVendaDto)
  itens: CreateItemVendaDto[];
}
