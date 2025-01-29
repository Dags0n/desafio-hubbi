import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemCompra } from '../models';
import { CreateItemCompraDto } from '../dtos';

@Injectable()
export class ItemCompraService {
  constructor(
    @InjectRepository(ItemCompra)
    private itemCompraRepository: Repository<ItemCompra>,
  ) {}

  async create(createItemCompraDto: CreateItemCompraDto): Promise<ItemCompra> {
    const itemCompra = this.itemCompraRepository.create(createItemCompraDto);
    return this.itemCompraRepository.save(itemCompra);
  }
}
