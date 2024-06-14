import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class TaskService {

  constructor(private prisma: DbService) { }

  async create(createTaskDto: CreateTaskDto) {
    return this.prisma.task.create({
      data: createTaskDto,
    });
  }


  
  async findAll() {
    return this.prisma.task.findMany();
  }


  async findOne(id: number) {
    return this.prisma.task.findUnique({
      where: {
        id,
      },
    });
  }


  async update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.prisma.task.update({
      where: {
        id,
      },
      data: updateTaskDto,
    });
  }


  async remove(id: number) {
    return this.prisma.task.delete({
      where: {
        id,
      },
    });
  }
}
