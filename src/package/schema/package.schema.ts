import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PackageAppDocument = PackageApp & Document;

@Schema()
export class PackageApp {
  @Prop({ required: true })
  name: string;

  @Prop()
  status: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const PackageAppSchema = SchemaFactory.createForClass(PackageApp);
