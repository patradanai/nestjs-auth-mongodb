import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schema/user.schema';
import * as bcrypt from 'bcrypt';
import { Role } from 'src/role/role.interface';
import { RoleService } from 'src/role/role.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly UserRepository: Model<UserDocument>,
    private readonly roleService: RoleService,
  ) {}

  async createUserWithDefault(
    username: string,
    password: string,
    email: string,
  ): Promise<void> {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new this.UserRepository({
      username,
      email,
      password: hashedPassword,
    });

    try {
      // Add Role
      await this.roleService.findByName(Role.CUSTOMER).then((role) => {
        user.roles.push(role._id);
      });

      await user.save();
    } catch (err) {
      if (err.code === 11000) {
        throw new ConflictException('User already exists');
      }

      throw err;
    }
  }
}
