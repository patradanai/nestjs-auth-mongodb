import { Module } from '@nestjs/common';
import { BatchFileService } from './batch-file.service';
import { BatchFileController } from './batch-file.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BatchFile, BatchFileSchema } from './schema/batch-file.schema';
import {
  BatchFileType,
  BatchFileTypeSchema,
} from './schema/batch-file-type.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BatchFile.name, schema: BatchFileSchema },
      { name: BatchFileType.name, schema: BatchFileTypeSchema },
    ]),
  ],
  providers: [BatchFileService],
  controllers: [BatchFileController],
})
export class BatchFileModule {}
