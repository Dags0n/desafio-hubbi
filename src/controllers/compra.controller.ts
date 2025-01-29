import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { CompraService } from '../services';
import { CreateCompraDto, UpdateCompraDto } from '../dtos';

@Controller('compras')
export class CompraController {
  constructor(private readonly compraService: CompraService) {}

  @Post()
  async create(@Body() createCompraDto: CreateCompraDto) {
    return this.compraService.create(createCompraDto);
  }

  @Get()
  async findAll() {
    return this.compraService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.compraService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateCompraDto: UpdateCompraDto) {
    return this.compraService.update(id, updateCompraDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.compraService.remove(id);
  }
}
