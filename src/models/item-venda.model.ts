import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Venda, Produto } from './index';

@Entity()
export class ItemVenda {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  quantidade: number;

  @Column('decimal')
  precoTotal: number;

  @ManyToOne(() => Venda, (venda) => venda.itens)
  @JoinColumn({ name: 'venda_id' })
  venda: Venda;

  @ManyToOne(() => Produto, (produto) => produto.itensVenda)
  @JoinColumn({ name: 'produto_id' })
  produto: Produto;
}
