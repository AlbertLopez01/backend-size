import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AulasModule } from './aulas/aulas.module';
import { AulaEntity } from './aulas/entities/aula.entity';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "pruebas_back",
    synchronize: true,
    entities:[AulaEntity],
  }), ConfigModule.forRoot(),
    AulasModule,],
  controllers: [],
  providers: [AppService],
  exports: [],
})
export class AppModule { }
