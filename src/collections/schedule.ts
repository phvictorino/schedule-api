import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Schedule extends Document {
  @Prop()
  description: string;

  @Prop()
  clerkName: string;
}

export const ScheduleSchema = SchemaFactory.createForClass(Schedule);
