import { Controller, Post, Body } from '@nestjs/common';
import { ItemCompraService } from '../services';
import { CreateItemCompraDto } from '../dtos';

@Controller('itens-compra')
export class ItemCompraController {
  constructor(private readonly itemCompraService: ItemCompraService) {}

  @Post()
  async create(@Body() createItemCompraDto: CreateItemCompraDto) {
    return this.itemCompraService.create(createItemCompraDto);
  }
}
