
import {  Injectable,NotFoundException,} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Note, NoteDocument } from './Schemas/notes.schema';
import { CreateNoteDto } from './DTO/create-note-dto';
import { UpdateNoteDto } from './DTO/update-note-dto';

@Injectable()
export class NotesService {
  constructor(
    @InjectModel(Note.name)
    private readonly noteModel: Model<NoteDocument>,
  ) {}

  async create(createNoteDto: CreateNoteDto) {
    const note = new this.noteModel(createNoteDto);
    return note.save();
  }

  async findAll() {
    return this.noteModel.find().exec();
  }

  async findOne(id: string) {
    const note = await this.noteModel.findById(id).exec();

    if (!note) {
      throw new NotFoundException('Note not found');
    }

    return note;
  }

  async update(id: string, updateNoteDto: UpdateNoteDto) {
    const note = await this.noteModel
      .findByIdAndUpdate(id, updateNoteDto, {
        new: true,
        runValidators: true,
      })
      .exec();

    if (!note) {
      throw new NotFoundException('Note not found');
    }

    return note;
  }

  async remove(id: string) {
    const note = await this.noteModel.findByIdAndDelete(id).exec();

    if (!note) {
      throw new NotFoundException('Note not found');
    }

    return { message: 'Note deleted successfully' };
  }
}
