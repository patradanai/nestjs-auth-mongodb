import {
  ConflictException,
  HttpStatus,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import * as dayjs from 'dayjs';
import { v4 as uuid } from 'uuid';
import { User, UserDocument } from 'src/auth/schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { requestWithUser, responseWithUser } from './interfaces/user.interface';
import { RefreshDocument, RefreshToken } from './schemas/refresh-token.schema';
import { RoleService } from 'src/role/role.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly UserRepository: Model<UserDocument>,
    @InjectModel(RefreshToken.name)
    private readonly RefreshTokenRepository: Model<RefreshDocument>,
    private readonly roleService: RoleService,
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

    // Add Role
    await this.roleService.findByName('CUSTOMER').then((role) => {
      user.roles.push(role._id);
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
    const refreshToken = uuid();

    // Gen Refresh token new
    await this.RefreshTokenRepository.create({
      user_id: req.userId,
      refresh_token: refreshToken,
      expiredAt: dayjs().add(7, 'days'),
    });

    return {
      userId: req.userId,
      accessToken: accessToken,
      refreshToken: refreshToken,
      roles: ['ADMIN'],
    };
  }

  async refreshToken(
    token: string,
    id: string,
  ): Promise<{ accessToken: string; refreshToken?: string }> {
    if (!Types.ObjectId.isValid(id)) throw new UnauthorizedException();

    const refreshModel: RefreshToken =
      await this.RefreshTokenRepository.findOne({
        user_id: id,
        refresh_token: token,
        revoke: false,
        expiredAt: { $gte: new Date() },
      });

    if (!refreshModel) {
      throw new UnauthorizedException('Refresh Token Invalid');
    }

    const accessToken = await this.jwtService.sign({ userId: id });

    const refreshToken = refreshModel.refresh_token;

    return { accessToken, refreshToken };
  }

  async revokeToken(userId: string, token: string) {
    const refreshToken = await this.RefreshTokenRepository.findOne({
      user_id: userId,
      refresh_token: token,
      revoke: false,
    });

    if (!refreshToken) throw new NotFoundException();

    refreshToken.revoke = true;

    await refreshToken.save();

    return { statusCode: HttpStatus.OK, message: 'Successful' };
  }
}
