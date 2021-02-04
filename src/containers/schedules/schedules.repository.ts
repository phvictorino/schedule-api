import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Schedule } from '../../collections/schedule';
import { Model } from 'mongoose';
import { CreateScheduleDTO } from './dtos/create-schedule.dto';

@Injectable()
export class SchedulesRepository {
  constructor(
    @InjectModel(Schedule.name)
    private readonly scheduleModel: Model<Schedule>,
  ) {}

  findAll(): Promise<Schedule[]> {
    return this.scheduleModel.find().exec();
  }

  async create(createDto: CreateScheduleDTO): Promise<Schedule> {
    const schedule = new this.scheduleModel(createDto);
    return schedule.save();
  }
}
