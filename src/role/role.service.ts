import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Role, RoleDocument } from './schemas/role.schema';

@Injectable()
export class RoleService {
  constructor(
    @InjectModel(Role.name) private readonly RoleModel: Model<RoleDocument>,
  ) {}
}
