import { Test, TestingModule } from '@nestjs/testing';
import { SchedulesService } from './schedules.service';
import { getModelToken } from '@nestjs/mongoose';
import { Schedule } from '../../collections/schedule';
import { SchedulesRepository } from './schedules.repository';

describe('SchedulesService', () => {
  let service: SchedulesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SchedulesService,
        SchedulesRepository,
        {
          provide: getModelToken('Schedule'),
          useValue: {
            findAll: () =>
              jest.fn().mockResolvedValue([{ description: 'test' }]),
          },
        },
      ],
    }).compile();

    service = module.get<SchedulesService>(SchedulesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    describe('when exists some Schedule', () => {
      it('should return at least one Schedule', async () => {
        const schedules = await service.findAll();
        expect(schedules).toBeDefined();
      });
    });
  });
});
