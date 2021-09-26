import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { DocumentMaster } from './document.scheme';

export type DocumentFileDocument = DocumentFile & Document;

@Schema()
export class DocumentFile {
  @Prop({ type: [Types.ObjectId], ref: DocumentMaster.name })
  documnet_id: string;

  @Prop()
  pdf_template_id: string;

  @Prop()
  pdf_path: number;

  @Prop()
  pdf_password: string;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  expiredAt: Date;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const DocumentFileSchema = SchemaFactory.createForClass(DocumentFile);
