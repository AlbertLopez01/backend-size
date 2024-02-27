import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AulasService } from './aulas.service';
import { CreateAulaDto } from './dto/create-aula.dto';
import { UpdateAulaDto } from './dto/update-aula.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('aulas')
export class AulasController {
  constructor(private readonly aulasService: AulasService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  importExcelData(@UploadedFile() file) {
    return this.aulasService.importExcelDataToDatabase(file);
  }
}
