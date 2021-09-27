import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Permission } from '../../permission/permission.schema';

export type RoleDocument = Role & Document;

@Schema()
export class Role {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop()
  is_active: boolean;

  @Prop({ required: true })
  createdAt: Date;

  @Prop({ required: true })
  updatedAt: Date;

  @Prop({ type: [Types.ObjectId], ref: Permission.name })
  permission: Permission[];
}

export const RoleSchema = SchemaFactory.createForClass(Role);
