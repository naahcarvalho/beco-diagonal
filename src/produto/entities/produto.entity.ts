import { IsInt, IsNotEmpty, IsNumber, IsPositive, Min } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity';

@Entity({ name: 'tb_produtos' })
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column('decimal', { precision: 8, scale: 2, nullable: false })
  @IsNumber()
  @IsPositive()
  preco: number;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Column('int', { nullable: false })
  estoque: number;

  @UpdateDateColumn()
  data: Date;

  @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'categoria_id' })
  @IsNotEmpty()
  categoria: Categoria;
}
