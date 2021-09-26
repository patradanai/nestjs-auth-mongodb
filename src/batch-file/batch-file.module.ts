import { Module } from '@nestjs/common';
import { BatchFileService } from './batch-file.service';
import { BatchFileController } from './batch-file.controller';

@Module({
  providers: [BatchFileService],
  controllers: [BatchFileController]
})
export class BatchFileModule {}
