
import {Body,Controller,Delete,Get,Param, Patch, Post,} from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './DTO/create-note-dto';
import { UpdateNoteDto } from './DTO/update-note-dto';
import { ParseObjectIdPipe } from '@nestjs/mongoose';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  create(@Body() createNoteDto: CreateNoteDto) {
    return this.notesService.create(createNoteDto);
  }

  @Get()
  findAll() {
    return this.notesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNoteDto: UpdateNoteDto,
  ) {
    return this.notesService.update(id, updateNoteDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseObjectIdPipe) id: string) {
    return this.notesService.remove(id);
  }
}
