import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/user/schema/user.schema';
import { PackageApp } from './package.schema';

export type PackageWithUserDocument = PackageWithUser & Document;

@Schema()
export class PackageWithUser {
  @Prop()
  pdf_limit: number;

  @Prop()
  mail_limit: number;

  @Prop()
  sms_limit: number;

  @Prop()
  pdf_usage: number;

  @Prop()
  mail_usage: number;

  @Prop()
  sms_usage: number;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop({ type: [Types.ObjectId], ref: PackageApp.name })
  package_id: string;

  @Prop({ type: [Types.ObjectId], ref: User.name })
  user_id: string;
}

export const PackageWithUserSchema =
  SchemaFactory.createForClass(PackageWithUser);
