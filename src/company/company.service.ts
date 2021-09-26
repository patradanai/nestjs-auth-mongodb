import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CompanyAddress,
  CompanyAddressDocument,
} from './schema/company-address.schema';
import {
  CompanyBranch,
  CompanyBranchDocument,
} from './schema/company-branch.schema';
import {
  CompanyDetails,
  CompanyDetailsDocument,
} from './schema/company-details.schema';
import { Company, CompanyDocument } from './schema/company.schema';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name)
    private readonly CompanyRepository: Model<CompanyDocument>,
    @InjectModel(CompanyBranch.name)
    private readonly CompanyBranchRepository: Model<CompanyBranchDocument>,
    @InjectModel(CompanyDetails.name)
    private readonly CompanyDetailsRepository: Model<CompanyDetailsDocument>,
    @InjectModel(CompanyAddress.name)
    private readonly CompanyAddressRepository: Model<CompanyAddressDocument>,
  ) {}
}
