import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from '../models';
import { CreateProdutoDto, UpdateProdutoDto } from '../dtos';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
  ) {}

  async create(createProdutoDto: CreateProdutoDto): Promise<Produto> {
    const produto = this.produtoRepository.create(createProdutoDto);
    return this.produtoRepository.save(produto);
  }

  async findAll(): Promise<Produto[]> {
    return this.produtoRepository.find();
  }

  async findOne(id: number): Promise<Produto> {
    return this.produtoRepository.findOne({ where: { id } });
  }

  async update(id: number, updateProdutoDto: UpdateProdutoDto): Promise<Produto> {
    await this.produtoRepository.update(id, updateProdutoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.produtoRepository.delete(id);
  }
}
