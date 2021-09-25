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
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  providers: [AuthService, JwtStrategy, LocalStrategy],
  exports: [JwtStrategy, PassportModule],
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
  ],
  controllers: [AuthController],
})
export class AuthModule {}
