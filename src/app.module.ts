import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PermissionModule } from './permission/permission.module';
import { RoleModule } from './role/role.module';
import { CompanyModule } from './company/company.module';
import { DocumentModule } from './document/document.module';
import { TransactionModule } from './transaction/transaction.module';
import { OrderModule } from './order/order.module';
import { PackageModule } from './package/package.module';
import { BatchFileModule } from './batch-file/batch-file.module';
import { JobFileModule } from './job-file/job-file.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/ezy-account'),
    AuthModule,
    PermissionModule,
    RoleModule,
    CompanyModule,
    DocumentModule,
    TransactionModule,
    OrderModule,
    PackageModule,
    BatchFileModule,
    JobFileModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
