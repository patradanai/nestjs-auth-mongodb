import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtPayload } from '../interfaces/user.interface';
import { User, UserDocument } from 'src/user/schema/user.schema';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'accessToken') {
  constructor(
    @InjectModel(User.name) private userRepository: Model<UserDocument>,
  ) {
    super({
      secretOrKey: 'AS210d#!@!slsdm1_3!@!=123x,,l#',
      ignoreExpiration: false,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: JwtPayload) {
    const { userId } = payload;

    const user = await this.userRepository.findById(userId).select('_id roles');

    if (!user) {
      throw new UnauthorizedException();
    }
    console.log(user);
    return user;
  }
}
