import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(@Body() authCredential: CreateUserDto) {
    return await this.authService.signUp(authCredential);
  }

  @UseGuards(AuthGuard('local'))
  @Post('/signin')
  async signIn(@Request() req) {
    return await this.authService.signIn(req.user);
  }

  @Post('/:id/token')
  async tokenRefresh(@Body() req: RefreshTokenDto, @Param('id') userId) {
    return await this.authService.refreshToken(req.token, userId);
  }

  @UseGuards(AuthGuard('accessToken'))
  @Delete('/signout')
  async signOut(@Body() params, @Request() req) {
    return await this.authService.signOut(req.user, params.token);
  }
}
