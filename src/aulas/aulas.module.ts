import { Module } from '@nestjs/common';
import { AulasService } from './aulas.service';
import { AulasController } from './aulas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AulaEntity } from './entities/aula.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AulaEntity])],
  controllers: [AulasController],
  providers: [AulasService],
  exports:[]
})
export class AulasModule { }
