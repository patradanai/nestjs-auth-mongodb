import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { Role, RoleSchema } from './schemas/role.schema';
import { RoleService } from './role.service';
import { RolesGuard } from './guard/role.gurad';

@Module({
  providers: [
    RoleService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  imports: [
    MongooseModule.forFeature([{ name: Role.name, schema: RoleSchema }]),
  ],
  exports: [RoleService],
})
export class RoleModule {}
