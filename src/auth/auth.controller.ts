import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';

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

  @UseGuards(AuthGuard('refreshToken'))
  @Post('/token')
  async tokenRefresh(@Request() req) {
    console.log(req);
    // return await this.authService.refreshToken(req.token);
  }
}
