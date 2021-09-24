import { Body, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PassportStrategy } from '@nestjs/passport';
import { Model } from 'mongoose';
import { ExtractJwt, Strategy } from 'passport-jwt';
import * as dayjs from 'dayjs';
import { JwtPayload } from './interfaces/user.interface';
import { User, UserDocument } from './schemas/user.schema';

export class JwtStrategyRefresh extends PassportStrategy(
  Strategy,
  'refreshToken',
) {
  constructor(
    @InjectModel(User.name) private userRepository: Model<UserDocument>,
  ) {
    super({
      secretOrKey: 'AS210d#!@!slsdm1_3!@!=123x,,l#',
      ignoreExpiration: false,
      jwtFromRequest: ExtractJwt.fromBodyField('token'),
      passReqToCallback: true,
    });
  }

  async validate(@Body() reqeust, payload: JwtPayload) {
    const { userId } = payload;
    const { token } = reqeust.body;

    const user: User = await this.userRepository
      .findOne({ _id: userId })
      .populate({
        path: 'refresh_tokens',
        match: {
          refresh_token: token,
          revoke: 0,
          expiredAt: { $gte: dayjs().format() },
        },
      });
    if (user.refresh_tokens.length > 0) {
      throw new UnauthorizedException();
    }

    return { user: userId };
  }
}
