import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateProdutoDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsNumber()
  @IsNotEmpty()
  preco: number;

  @IsNumber()
  @IsNotEmpty()
  estoque: number;
}
