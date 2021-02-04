import { Injectable } from '@nestjs/common';
import { Schedule } from '../../collections/schedule';
import { CreateScheduleDTO } from './dtos/create-schedule.dto';
import { SchedulesRepository } from './schedules.repository';

@Injectable()
export class SchedulesService {
  constructor(private schedulesRepository: SchedulesRepository) {}

  findAll(): Promise<Schedule[]> {
    return this.schedulesRepository.findAll();
  }

  createSchedule(createDto: CreateScheduleDTO): Promise<Schedule> {
    return this.schedulesRepository.create(createDto);
  }
}
