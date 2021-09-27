import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { JobFile } from './job-file.schema';

export type JobFileTypeDocument = JobFileType & Document;

@Schema()
export class JobFileType {
  @Prop({ required: true })
  job_name: string;

  @Prop()
  type: string;

  @Prop()
  mail_auto: boolean;

  @Prop()
  sms_auto: boolean;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop({ type: [Types.ObjectId], ref: JobFile.name })
  job_file_id: string;
}

export const JobFileTypeSchema = SchemaFactory.createForClass(JobFileType);
