import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { DocumentMaster } from './document.scheme';

export type DocumentBuyerDocument = DocumentBuyer & Document;

@Schema()
export class DocumentBuyer {
  @Prop({ type: [Types.ObjectId], ref: DocumentMaster.name })
  documnet_id: string;

  @Prop()
  type: string;

  @Prop()
  tax_id: string;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  email_cc: string;

  @Prop()
  address_1: string;

  @Prop()
  address_2: string;

  @Prop()
  telephone: string;

  @Prop()
  country_code: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const DocumentBuyerSchema = SchemaFactory.createForClass(DocumentBuyer);
