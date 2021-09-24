import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import * as dayjs from 'dayjs';
import { User, UserDocument } from 'src/auth/schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { requestWithUser, responseWithUser } from './interfaces/user.interface';
import { RefreshDocument, RefreshToken } from './schemas/refresh-token.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly UserRepository: Model<UserDocument>,
    @InjectModel(RefreshToken.name)
    private readonly RefreshTokenRepository: Model<RefreshDocument>,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(AuthCredential: CreateUserDto): Promise<void> {
    const { username, password, email } = AuthCredential;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new this.UserRepository({
      username,
      email,
      password: hashedPassword,
    });

    try {
      await user.save();
    } catch (err) {
      if (err.code === 11000) {
        throw new ConflictException('User already exists');
      }

      throw err;
    }
  }

  async signIn(req: requestWithUser): Promise<responseWithUser> {
    const accessToken: string = await this.jwtService.sign({
      userId: req.userId,
    });
    const refreshToken: string = await this.jwtService.sign(
      {
        userId: req.userId,
      },
      { expiresIn: '7d' },
    );

    await this.RefreshTokenRepository.create({
      refresh_token: refreshToken,
      expiredAt: dayjs().add(7, 'dayjs'),
    }).then(async (res) => {
      await this.UserRepository.findByIdAndUpdate(req.userId, {
        $push: { refresh_tokens: res._id },
      });
    });

    return {
      userId: req.userId,
      accessToken: accessToken,
      refreshToken: refreshToken,
      roles: ['ADMIN'],
    };
  }
}
