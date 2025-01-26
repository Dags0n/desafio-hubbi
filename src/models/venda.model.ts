import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Compra, ItemVenda } from './index';
import { enumStatusVenda } from 'src/enums/enumStatusVenda';

@Entity()
export class Venda {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: string;

  @Column('decimal')
  valorTotal: number;

  @Column({ type: 'enum', enum: enumStatusVenda, default: enumStatusVenda.PENDENTE })
  status: enumStatusVenda;

  @OneToMany(() => ItemVenda, (itemVenda) => itemVenda.venda, { cascade: true })
  itens: ItemVenda[];

  @OneToMany(() => Compra, (compra) => compra.venda)
  compras: Compra[];
}
