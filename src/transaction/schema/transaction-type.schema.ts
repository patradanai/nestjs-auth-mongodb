import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TransactionTypeDocument = TransactionType & Document;

@Schema()
export class TransactionType {
  @Prop({ required: true })
  name: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const TransactionTypeSchema =
  SchemaFactory.createForClass(TransactionType);
