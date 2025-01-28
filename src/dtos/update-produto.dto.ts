import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateProdutoDto {
  @IsOptional()
  @IsString()
  nome?: string;

  @IsOptional()
  @IsNumber()
  preco?: number;

  @IsOptional()
  @IsNumber()
  estoque?: number;
}
