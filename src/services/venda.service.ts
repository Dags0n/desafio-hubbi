import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Venda } from '../models/venda.model';
import { CreateVendaDto, UpdateVendaDto } from '../dtos';

@Injectable()
export class VendaService {
  constructor(
    @InjectRepository(Venda)
    private vendaRepository: Repository<Venda>,
  ) {}

  async create(createVendaDto: CreateVendaDto): Promise<Venda> {
    const venda = this.vendaRepository.create(createVendaDto);
    return this.vendaRepository.save(venda);
  }

  async findAll(): Promise<Venda[]> {
    return this.vendaRepository.find({ relations: ['itens', 'itens.produto', 'compras'] });
  }

  async findOne(id: number): Promise<Venda> {
    return this.vendaRepository.findOne({
      where: { id },
      relations: ['itens', 'itens.produto', 'compras'],
    });
  }

  async update(id: number, updateVendaDto: UpdateVendaDto): Promise<Venda> {
    await this.vendaRepository.update(id, updateVendaDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.vendaRepository.delete(id);
  }
}
