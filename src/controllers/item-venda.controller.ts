import { Controller, Post, Body } from '@nestjs/common';
import { ItemVendaService } from '../services';
import { CreateItemVendaDto } from '../dtos';

@Controller('itens-venda')
export class ItemVendaController {
  constructor(private readonly itemVendaService: ItemVendaService) {}

  @Post()
  async create(@Body() createItemVendaDto: CreateItemVendaDto) {
    return this.itemVendaService.create(createItemVendaDto);
  }
}
