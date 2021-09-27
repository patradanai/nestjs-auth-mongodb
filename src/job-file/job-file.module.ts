import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobFileController } from './job-file.controller';
import { JobFileService } from './job-file.service';
import { JobFileType, JobFileTypeSchema } from './schema/job-file-type.schema';
import { JobFile, JobFileSchema } from './schema/job-file.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: JobFile.name, schema: JobFileSchema },
      { name: JobFileType.name, schema: JobFileTypeSchema },
    ]),
  ],
  controllers: [JobFileController],
  providers: [JobFileService],
})
export class JobFileModule {}
