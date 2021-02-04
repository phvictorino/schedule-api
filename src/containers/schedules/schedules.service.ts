import { Injectable } from '@nestjs/common';
import { Schedule } from '../../collections/schedule';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SchedulesService {
  constructor(
    @InjectModel(Schedule.name)
    private readonly scheduleModel: Model<Schedule>,
  ) {}

  findAllSchedules(): Promise<Schedule[]> {
    return this.scheduleModel.find().exec();
  }
}
