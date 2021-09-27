import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Order } from 'src/order/schema/order.schema';
import { TransactionType } from './transaction-type.schema';

export type TransactionDocument = Transaction & Document;

@Schema()
export class Transaction {
  @Prop({ required: true })
  name: string;

  @Prop()
  ref_1: string;

  @Prop()
  ref_2: string;

  @Prop()
  ref_3: string;

  @Prop()
  transaction_id: string;

  @Prop()
  transaction_date: string;

  @Prop()
  transaction_time: string;

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

  @Prop({ type: [Types.ObjectId], ref: Order.name })
  order_id: string;

  @Prop({ type: [Types.ObjectId], ref: TransactionType.name })
  transaction_type_id: string;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
