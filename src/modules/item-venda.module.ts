import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemVenda } from '../models';
import { ItemVendaService } from '../services';
import { ItemVendaController } from '../controllers';

@Module({
  imports: [TypeOrmModule.forFeature([ItemVenda])],
  controllers: [ItemVendaController],
  providers: [ItemVendaService],
  exports: [ItemVendaService],
})
export class ItemVendaModule {}
