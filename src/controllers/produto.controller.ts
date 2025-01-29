import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ProdutoService } from '../services';
import { CreateProdutoDto, UpdateProdutoDto } from '../dtos';

@Controller('produtos')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  async create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtoService.create(createProdutoDto);
  }

  @Get()
  async findAll() {
    return this.produtoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.produtoService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtoService.update(id, updateProdutoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.produtoService.remove(id);
  }
}
