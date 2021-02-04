import { Module } from '@nestjs/common';
import { SchedulesController } from './schedules.controller';
import { SchedulesService } from './schedules.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Schedule, ScheduleSchema } from '../../collections/schedule';
import { SchedulesRepository } from './schedules.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Schedule.name,
        schema: ScheduleSchema,
      },
    ]),
  ],
  controllers: [SchedulesController],
  providers: [SchedulesService, SchedulesRepository],
})
export class SchedulesModule {}
