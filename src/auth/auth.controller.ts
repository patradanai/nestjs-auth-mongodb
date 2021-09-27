import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Param,
  Delete,
  Get,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Roles } from 'src/role/decorator/role.decorator';
import { Role } from 'src/role/role.interface';
import { Auth } from './decorator/auth.decorator';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(
    @Body() authCredential: CreateUserDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    await this.authService.signUp(authCredential);

    response.status(HttpStatus.OK);

    return { StatusCode: HttpStatus.OK, message: 'Created User Success' };
  }

  @UseGuards(LocalAuthGuard)
  @Post('/signin')
  async signIn(@Request() req) {
    return await this.authService.signIn(req.user);
  }

  @Post('/:id/token')
  async tokenRefresh(@Body() req: RefreshTokenDto, @Param('id') userId) {
    return await this.authService.refreshToken(req.token, userId);
  }

  @Auth()
  @Delete('/revoke-token')
  async signOut(@Body() params, @Request() req) {
    return await this.authService.revokeToken(req.user._id, params.token);
  }

  @Get('/profile')
  @Auth()
  @Roles(Role.ADMIN)
  profile() {
    console.log('ADMIN');
  }
}
