import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Company } from 'src/company/schema/company.schema';

export type JobFileDocument = JobFile & Document;

@Schema()
export class JobFile {
  @Prop({ required: true })
  name: string;

  @Prop()
  status: string;

  @Prop()
  package: string;

  @Prop()
  is_active: boolean;

  @Prop({ required: true })
  createdAt: Date;

  @Prop({ required: true })
  updatedAt: Date;

  @Prop({ type: [Types.ObjectId], ref: Company.name })
  company_id: string;
}

export const JobFileSchema = SchemaFactory.createForClass(JobFile);
