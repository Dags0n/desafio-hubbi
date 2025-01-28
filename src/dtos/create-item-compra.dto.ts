import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateItemCompraDto {
  @IsNumber()
  @IsNotEmpty()
  produtoId: number;

  @IsNumber()
  @IsNotEmpty()
  quantidade: number;

  @IsNumber()
  @IsNotEmpty()
  precoTotal: number;
}
