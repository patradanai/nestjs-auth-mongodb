import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RefreshDocument = RefreshToken & Document;

@Schema()
export class RefreshToken {
  @Prop()
  refresh_token: string;

  @Prop({ default: false })
  revoke: boolean;

  @Prop()
  slug: string;

  @Prop({ required: true })
  expiredAt: Date;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const RefreshTokenSchema = SchemaFactory.createForClass(RefreshToken);
