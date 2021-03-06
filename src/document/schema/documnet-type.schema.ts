import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DocumentFileTypeDocument = DocumentFileType & Document;

@Schema()
export class DocumentFileType {
  @Prop({ required: true })
  name: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const DocumentFileTypeSchema =
  SchemaFactory.createForClass(DocumentFileType);
