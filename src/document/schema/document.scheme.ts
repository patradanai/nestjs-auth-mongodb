import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Company } from 'src/company/schema/company.schema';
import { DocumentType } from './documnet-type.schema';

export type DocumentMasterDocument = DocumentMaster & Document;

@Schema()
export class DocumentMaster {
  @Prop({ type: [Types.ObjectId], ref: Company.name })
  company_id: string;

  @Prop({ type: [Types.ObjectId], ref: 'BatchFile' })
  batch_file_id: string;

  @Prop({ type: [Types.ObjectId], ref: 'JobFile' })
  job_file_id: string;

  @Prop({ type: [Types.ObjectId], ref: DocumentType.name })
  documnet_type_id: string;

  @Prop()
  document_code: string;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  status: string;

  @Prop()
  invoice_number: string;

  @Prop()
  currency: string;

  @Prop()
  amount: number;

  @Prop()
  tax_rate: number;

  @Prop()
  tax_code_type: string;

  @Prop()
  tax_amount: number;

  @Prop()
  fee_amount: number;

  @Prop()
  discount_amount: number;

  @Prop()
  discount_amount_before_tax: number;

  @Prop()
  total_amount_tax: number;

  @Prop()
  total_amount: number;

  @Prop({ default: false })
  is_pdf: boolean;

  @Prop({ default: false })
  is_email: boolean;

  @Prop({ default: false })
  is_sms: boolean;

  @Prop()
  additional: string;

  @Prop()
  noted: string;

  @Prop()
  document_reference_code: string;

  @Prop()
  payment_condition: string;

  @Prop()
  due_save: Date;

  @Prop({ default: true })
  is_active?: boolean;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const DocumentMasterSchema =
  SchemaFactory.createForClass(DocumentMaster);
