import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type CompanyDetailsDocument = CompanyDetails & Document;

@Schema()
export class CompanyDetails {
  @Prop({ type: [Types.ObjectId], ref: 'CompanyBranch' })
  company_branch_id: string;

  @Prop()
  name_en: string;

  @Prop()
  name_th: string;

  @Prop()
  telephone: string;

  @Prop({ default: true })
  is_active?: boolean;

  @Prop()
  logo: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const CompanyDetailsSchema =
  SchemaFactory.createForClass(CompanyDetails);
