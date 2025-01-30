import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compra, ItemCompra } from '../models';
import { CompraService } from '../services';
import { CompraController } from '../controllers';
import { ProdutoModule } from './produto.module';
import { VendaModule } from './venda.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Compra, ItemCompra]),
    ProdutoModule,
    VendaModule,
  ],
  controllers: [CompraController],
  providers: [CompraService],
  exports: [CompraService],
})
export class CompraModule {}
