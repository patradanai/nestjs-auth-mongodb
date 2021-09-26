import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/auth/schemas/user.schema';

export type CompanyDocument = Company & Document;

@Schema()
export class Company {
  @Prop({ type: Types.ObjectId, ref: User.name })
  user_id: string;

  @Prop()
  name_en: string;

  @Prop()
  name_th: string;

  @Prop({ default: true })
  is_active?: boolean;

  @Prop()
  tax_id: string;

  @Prop()
  logo: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
