import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Company } from 'src/company/schema/company.schema';
import { BatchFileType } from './batch-file-type.schema';
import { DocumentFileType } from '../../document/schema/documnet-type.schema';

export type BatchFileDocument = BatchFile & Document;

@Schema()
export class BatchFile {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop()
  is_active: boolean;

  @Prop({ required: true })
  createdAt: Date;

  @Prop({ required: true })
  updatedAt: Date;

  @Prop({ type: [Types.ObjectId], ref: Company.name })
  company_id: string;

  @Prop({ type: [Types.ObjectId], ref: BatchFileType.name })
  batch_type_id: string;

  @Prop({ type: [Types.ObjectId], ref: DocumentFileType.name })
  document_type_id: string;
}

export const BatchFileSchema = SchemaFactory.createForClass(BatchFile);
