import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PermissionDocument = Permission & Document;

@Schema()
export class Permission {
  @Prop({ required: true })
  name: string;

  @Prop()
  slug: string;

  @Prop()
  is_active: boolean;

  @Prop({ required: true })
  createdAt: Date;

  @Prop({ required: true })
  updatedAt: Date;
}

export const PermissionSchema = SchemaFactory.createForClass(Permission);
