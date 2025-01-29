import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import  * as dotenv from 'dotenv';
import { Venda, Compra, Produto, ItemVenda, ItemCompra } from './models';
import { VendaModule, CompraModule, ProdutoModule, ItemVendaModule, ItemCompraModule } from './modules';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || 'admin',
      database: process.env.DB_NAME || 'desafio_hubbi',
      entities: [Venda, Compra, Produto, ItemVenda, ItemCompra],
      synchronize: true,
    }),
    VendaModule,
    CompraModule,
    ProdutoModule,
    ItemVendaModule,
    ItemCompraModule,
  ],
})
export class AppModule {}
