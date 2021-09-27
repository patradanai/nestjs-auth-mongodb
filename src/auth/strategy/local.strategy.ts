import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User, UserDocument } from 'src/user/schema/user.schema';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(User.name)
    private readonly UserRepository: Model<UserDocument>,
  ) {
    super({ usernameField: 'username' });
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.UserRepository.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      return { userId: user.id };
    } else {
      throw new UnauthorizedException('Please Check you login credentials');
    }
  }
}
