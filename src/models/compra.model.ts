import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Venda, ItemCompra } from './index';

@Entity()
export class Compra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: string;

  @Column('decimal')
  valorTotal: number;

  @ManyToOne(() => Venda, (venda) => venda.compras)
  @JoinColumn({ name: 'venda_id' })
  venda: Venda;

  @OneToMany(() => ItemCompra, (itemCompra) => itemCompra.compra, { cascade: true })
  itens: ItemCompra[];
}
