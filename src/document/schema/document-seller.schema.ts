import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { DocumentMaster } from './document.scheme';

export type DocumentSellerDocument = DocumentSeller & Document;

@Schema()
export class DocumentSeller {
  @Prop({ type: [Types.ObjectId], ref: DocumentMaster.name })
  documnet_id: string;

  @Prop()
  tax_id: string;

  @Prop()
  branch: string;

  @Prop()
  name: string;

  @Prop()
  name_en: string;

  @Prop()
  telephone: string;

  @Prop()
  zip_code: string;

  @Prop()
  district: string;

  @Prop()
  sub_district: string;

  @Prop()
  province: string;

  @Prop()
  district_code: string;

  @Prop()
  sub_district_code: string;

  @Prop()
  province_code: string;

  @Prop()
  country_code: string;

  @Prop()
  building: string;

  @Prop()
  road: string;

  @Prop()
  village: string;

  @Prop()
  soi: string;

  @Prop()
  moo: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const DocumentSellerSchema =
  SchemaFactory.createForClass(DocumentSeller);
