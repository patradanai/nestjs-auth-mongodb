import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Company, CompanySchema } from './schema/company.schema';
import {
  CompanyDetails,
  CompanyDetailsSchema,
} from './schema/company-details.schema';
import {
  CompanyBranch,
  CompanyBranchSchema,
} from './schema/company-branch.schema';
import {
  CompanyAddress,
  CompanyAddressSchema,
} from './schema/company-address.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Company.name, schema: CompanySchema },
      { name: CompanyDetails.name, schema: CompanyDetailsSchema },
      { name: CompanyBranch.name, schema: CompanyBranchSchema },
      { name: CompanyAddress.name, schema: CompanyAddressSchema },
    ]),
  ],
  providers: [CompanyService],
  controllers: [CompanyController],
  exports: [CompanyService],
})
export class CompanyModule {}
