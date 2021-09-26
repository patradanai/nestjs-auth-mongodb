import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { DocumentMaster } from './document.scheme';

export type DocumentProductDocument = DocumentProduct & Document;

@Schema()
export class DocumentProduct {
  @Prop({ type: [Types.ObjectId], ref: DocumentMaster.name })
  documnet_id: string;

  @Prop()
  order_no: number;

  @Prop()
  name: string;

  @Prop()
  quantity: number;

  @Prop()
  unit_code: string;

  @Prop()
  currency: string;

  @Prop()
  amount: number;

  @Prop()
  amount_vat: number;

  @Prop()
  amount_vat_per_txn: number;

  @Prop()
  total_amount_per_txn: number;

  @Prop()
  ref_1: string;

  @Prop()
  ref_2: string;

  @Prop()
  ref_3: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const DocumentProductSchema =
  SchemaFactory.createForClass(DocumentProduct);
