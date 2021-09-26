import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BatchFileTypeDocument = BatchFileType & Document;

@Schema()
export class BatchFileType {
  @Prop({ required: true })
  name: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const BatchFileTypeSchema = SchemaFactory.createForClass(BatchFileType);
