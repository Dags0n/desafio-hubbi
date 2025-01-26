import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ItemVenda, ItemCompra } from './index';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column('decimal')
  preco: number;

  @Column('int')
  estoque: number;

  @OneToMany(() => ItemVenda, (itemVenda) => itemVenda.produto)
  itensVenda: ItemVenda[];

  @OneToMany(() => ItemCompra, (itemCompra) => itemCompra.produto)
  itensCompra: ItemCompra[];
}
