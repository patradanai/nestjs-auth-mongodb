import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/auth/schemas/user.schema';
import { PackageApp } from 'src/package/schema/package.schema';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ required: true })
  name: string;

  @Prop()
  address_1: string;

  @Prop()
  address_2: string;

  @Prop()
  telephone: string;

  @Prop()
  zip_code: string;

  @Prop()
  country_code: string;

  @Prop()
  amount: string;

  @Prop()
  currency: string;

  @Prop()
  status: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop({ type: [Types.ObjectId], ref: User.name })
  user_id: string;

  @Prop({ type: [Types.ObjectId], ref: PackageApp.name })
  package_id: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
