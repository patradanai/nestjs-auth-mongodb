import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Company } from './company.schema';

export type CompanyBranchDocument = CompanyBranch & Document;

@Schema()
export class CompanyBranch {
  @Prop({ type: Types.ObjectId, ref: Company.name })
  company_id: string;

  @Prop()
  name_en: string;

  @Prop()
  branch_code: string;

  @Prop({ default: true })
  is_active?: boolean;

  @Prop()
  logo: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const CompanyBranchSchema = SchemaFactory.createForClass(CompanyBranch);
