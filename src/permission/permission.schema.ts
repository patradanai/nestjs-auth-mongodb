import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Role } from '../role/schema/role.schema';

export type PermissionDocument = Permission & Document;

@Schema()
export class Permission {
  @Prop({ type: Types.ObjectId })
  _id: Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  slug: string;

  @Prop()
  is_active: boolean;

  @Prop({ required: true })
  createdAt: Date;

  @Prop({ required: true })
  updatedAt: Date;

  @Prop({ type: Types.ObjectId, ref: 'Role' })
  roles: Role[];
}

export const PermissionSchema = SchemaFactory.createForClass(Permission);
