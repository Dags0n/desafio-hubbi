import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Compra, Venda } from '../models';
import { CreateCompraDto, UpdateCompraDto } from '../dtos';
import { ProdutoService } from './produto.service';
import { VendaService } from './venda.service';
import { enumStatusVenda } from 'src/enums/enumStatusVenda';

@Injectable()
export class CompraService {
  constructor(
    @InjectRepository(Compra)
    private compraRepository: Repository<Compra>,
    private readonly produtoService: ProdutoService,
    private readonly vendaService: VendaService,
  ) {}

  async create(createCompraDto: CreateCompraDto): Promise<Compra> {
    const venda = await this.vendaService.findOne(createCompraDto.vendaId);
  
    if (!venda) {
      throw new Error('Venda não encontrada');
    }
  
    const compra = this.compraRepository.create({
      ...createCompraDto,
      venda,
    });
  
    await this.compraRepository.save(compra);
    for (const item of createCompraDto.itens) {
      const produto = await this.produtoService.findOne(item.produtoId);
  
      if (produto) {
        produto.estoque += item.quantidade;
        await this.produtoService.update(produto.id, { estoque: produto.estoque });
      }
    }
    await this.verificarEAtualizarVenda(venda);  
    return compra;
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

  async verificarEAtualizarVenda(venda: Venda) {
    let podeConcluir = true;
  
    for (const item of venda.itens) {
      console.log(item);
      const produto = await this.produtoService.findOne(item.produto.id);
  
      if (!produto || produto.estoque < item.quantidade) {
        podeConcluir = false;
        break;
      }
    }
  
    if (podeConcluir) {
      venda.status = enumStatusVenda.CONCLUIDA;
      await this.vendaService.update(venda.id, { status: enumStatusVenda.CONCLUIDA });
    }
  }
}
