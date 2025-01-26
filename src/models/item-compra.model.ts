import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Compra, Produto } from './index';

@Entity()
export class ItemCompra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  quantidade: number;

  @Column('decimal')
  precoTotal: number;

  @ManyToOne(() => Compra, (compra) => compra.itens)
  @JoinColumn({ name: 'compra_id' })
  compra: Compra;

  @ManyToOne(() => Produto, (produto) => produto.itensCompra)
  @JoinColumn({ name: 'produto_id' })
  produto: Produto;
}
