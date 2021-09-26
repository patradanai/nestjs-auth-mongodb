import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type CompanyAddressDocument = CompanyAddress & Document;

@Schema()
export class CompanyAddress {
  @Prop({ type: Types.ObjectId, ref: CompanyAddress.name })
  company_detail_id: string;

  @Prop()
  address_1: string;

  @Prop()
  address_2: string;

  @Prop()
  zip_code: string;

  @Prop()
  country_code: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const CompanyAddressSchema =
  SchemaFactory.createForClass(CompanyAddress);
