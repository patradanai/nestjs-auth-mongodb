import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserSchema, User } from 'src/auth/schemas/user.schema';
import {
  RefreshToken,
  RefreshTokenSchema,
} from './schemas/refresh-token.schema';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategy/local.strategy';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { JwtStrategy } from './strategy/jwt.strategy';
import { RoleModule } from 'src/role/role.module';

@Module({
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  exports: [PassportModule],
  imports: [
    PassportModule.register({ defaultStrategy: 'accessToken' }),
    JwtModule.register({
      secret: 'AS210d#!@!slsdm1_3!@!=123x,,l#',
      signOptions: { expiresIn: 3600 },
    }),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: RefreshToken.name, schema: RefreshTokenSchema },
    ]),
    RoleModule,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
