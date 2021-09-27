import { Module } from '@nestjs/common';
import { PackageService } from './package.service';
import { PackageController } from './package.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PackageApp, PackageAppSchema } from './schema/package.schema';
import {
  PackageWithUser,
  PackageWithUserSchema,
} from './schema/package-user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PackageApp.name, schema: PackageAppSchema },
      { name: PackageWithUser.name, schema: PackageWithUserSchema },
    ]),
  ],
  providers: [PackageService],
  controllers: [PackageController],
})
export class PackageModule {}
