import { Controller, Get } from '@nestjs/common';
import { SchedulesService } from './schedules.service';
import { Schedule } from '../../collections/schedule';

@Controller('schedules')
export class SchedulesController {
  constructor(private readonly schedulesService: SchedulesService) {}

  @Get('/')
  getAllSchedules(): Promise<Schedule[]> {
    return this.schedulesService.findAllSchedules();
  }
}
