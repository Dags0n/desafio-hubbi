import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Venda, ItemVenda } from '../models';
import { VendaService } from '../services';
import { VendaController } from '../controllers';

@Module({
  imports: [TypeOrmModule.forFeature([Venda, ItemVenda])],
  controllers: [VendaController],
  providers: [VendaService],
  exports: [VendaService],
})
export class VendaModule {}
