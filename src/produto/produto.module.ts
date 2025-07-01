import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from '../categoria/categoria.module';
import { Produto } from './entities/produto.entity';
import { ProdutoService } from './services/produto.service';
import { ProdutoController } from './controllers/produto.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Produto]), CategoriaModule],
  controllers: [ProdutoController],
  providers: [ProdutoService],
  exports: [],
})
export class ProdutoModule {}
