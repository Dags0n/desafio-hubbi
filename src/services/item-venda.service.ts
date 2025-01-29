import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemVenda } from '../models';
import { CreateItemVendaDto } from '../dtos';

@Injectable()
export class ItemVendaService {
  constructor(
    @InjectRepository(ItemVenda)
    private itemVendaRepository: Repository<ItemVenda>,
  ) {}

  async create(createItemVendaDto: CreateItemVendaDto): Promise<ItemVenda> {
    const itemVenda = this.itemVendaRepository.create(createItemVendaDto);
    return this.itemVendaRepository.save(itemVenda);
  }
}
