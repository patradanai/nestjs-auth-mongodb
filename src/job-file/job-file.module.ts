import { Module } from '@nestjs/common';
import { JobFileController } from './job-file.controller';
import { JobFileService } from './job-file.service';

@Module({
  controllers: [JobFileController],
  providers: [JobFileService]
})
export class JobFileModule {}
