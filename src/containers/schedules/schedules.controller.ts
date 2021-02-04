import { Body, Controller, Get, Post } from '@nestjs/common';
import { SchedulesService } from './schedules.service';
import { Schedule } from '../../collections/schedule';
import { CreateScheduleDTO } from './dtos/create-schedule.dto';

@Controller('schedules')
export class SchedulesController {
  constructor(private readonly schedulesService: SchedulesService) {}

  @Get('/')
  getAllSchedules(): Promise<Schedule[]> {
    return this.schedulesService.findAllSchedules();
  }

  @Post()
  saveSchedule(@Body() createDto: CreateScheduleDTO): Promise<Schedule> {
    return this.schedulesService.createSchedule(createDto);
  }
}
