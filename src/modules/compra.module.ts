import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compra, ItemCompra } from '../models';
import { CompraService } from '../services';
import { CompraController } from '../controllers';

@Module({
  imports: [TypeOrmModule.forFeature([Compra, ItemCompra])],
  controllers: [CompraController],
  providers: [CompraService],
  exports: [CompraService],
})
export class CompraModule {}
