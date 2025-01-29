import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { VendaService } from '../services';
import { CreateVendaDto, UpdateVendaDto } from '../dtos';

@Controller('vendas')
export class VendaController {
  constructor(private readonly vendaService: VendaService) {}

  @Post()
  async create(@Body() createVendaDto: CreateVendaDto) {
    return this.vendaService.create(createVendaDto);
  }

  @Get()
  async findAll() {
    return this.vendaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.vendaService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateVendaDto: UpdateVendaDto) {
    return this.vendaService.update(id, updateVendaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.vendaService.remove(id);
  }
}
