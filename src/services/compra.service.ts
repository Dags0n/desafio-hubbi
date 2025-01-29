import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Compra } from '../models';
import { CreateCompraDto, UpdateCompraDto } from '../dtos';

@Injectable()
export class CompraService {
  constructor(
    @InjectRepository(Compra)
    private compraRepository: Repository<Compra>,
  ) {}

  async create(createCompraDto: CreateCompraDto): Promise<Compra> {
    const compra = this.compraRepository.create(createCompraDto);
    return this.compraRepository.save(compra);
  }

  async findAll(): Promise<Compra[]> {
    return this.compraRepository.find({ relations: ['itens', 'itens.produto', 'venda'] });
  }

  async findOne(id: number): Promise<Compra> {
    return this.compraRepository.findOne({
      where: { id },
      relations: ['itens', 'itens.produto', 'venda'],
    });
  }

  async update(id: number, updateCompraDto: UpdateCompraDto): Promise<Compra> {
    await this.compraRepository.update(id, updateCompraDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.compraRepository.delete(id);
  }
}
