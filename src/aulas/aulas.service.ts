import { Injectable } from '@nestjs/common';
import { CreateAulaDto } from './dto/create-aula.dto';
import { UpdateAulaDto } from './dto/update-aula.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AulaEntity } from './entities/aula.entity';
import { Repository } from 'typeorm';
import * as Excel from 'exceljs';
import { Readable } from 'stream';
@Injectable()
export class AulasService {
  constructor(
    @InjectRepository(AulaEntity)
    private readonly aulasRepository: Repository<AulaEntity>
  ) { }
  async importExcelDataToDatabase(file: Express.Multer.File) { 
    const workbook = new Excel.Workbook();
    const getBuffer = file.buffer
    const stream = Readable.from(getBuffer);
    const resultReading = await workbook.xlsx.read(stream)
    resultReading.getWorksheet(1).eachRow(this.insertDataExcel.bind(this))
  }
  async insertDataExcel(row, rowNumber) {
    if (rowNumber > 1) {
      const instance = this.aulasRepository.create({
        nombre_aula: row.values[1],
        lugar: row.values[2],
        capacidad: parseInt(row.values[3])
      })
      await this.aulasRepository.save(instance)
    }
  }
}
