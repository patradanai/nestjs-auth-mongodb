import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Role, RoleDocument } from './schema/role.schema';

@Injectable()
export class RoleService {
  constructor(
    @InjectModel(Role.name)
    private readonly RoleRepository: Model<RoleDocument>,
  ) {}

  async findByName(name: string): Promise<RoleDocument> {
    return this.RoleRepository.findOne({ name: name });
  }
}
