import { IsNotEmpty } from 'class-validator';

export class CreateScheduleDTO {
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  clerkName: string;
}
