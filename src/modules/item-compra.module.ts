import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemCompra } from '../models';
import { ItemCompraService } from '../services';
import { ItemCompraController } from '../controllers';

@Module({
  imports: [TypeOrmModule.forFeature([ItemCompra])],
  controllers: [ItemCompraController],
  providers: [ItemCompraService],
  exports: [ItemCompraService],
})
export class ItemCompraModule {}
