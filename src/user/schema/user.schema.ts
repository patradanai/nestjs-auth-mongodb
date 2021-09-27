import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Role } from '../../role/schema/role.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  last_login: Date;

  @Prop()
  is_active: boolean;

  @Prop()
  is_login: boolean;

  @Prop({ default: 0 })
  is_activated: boolean;

  @Prop()
  login_attempt: number;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop({ type: [Types.ObjectId], ref: Role.name })
  roles: Role[];
}

export const UserSchema = SchemaFactory.createForClass(User);
