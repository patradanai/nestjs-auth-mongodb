import { Module } from '@nestjs/common';
import { DocumentService } from './document.service';
import { DocumentController } from './document.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DocumentMaster, DocumentMasterSchema } from './schema/document.scheme';
import {
  DocumentType,
  DocumentTypeSchema,
} from './schema/documnet-type.schema';
import {
  DocumentSeller,
  DocumentSellerSchema,
} from './schema/document-seller.schema';
import {
  DocumentBuyer,
  DocumentBuyerSchema,
} from './schema/document-buyer.schema';
import {
  DocumentProduct,
  DocumentProductSchema,
} from './schema/document-product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DocumentMaster.name, schema: DocumentMasterSchema },
      { name: DocumentType.name, schema: DocumentTypeSchema },
      { name: DocumentSeller.name, schema: DocumentSellerSchema },
      { name: DocumentBuyer.name, schema: DocumentBuyerSchema },
      { name: DocumentProduct.name, schema: DocumentProductSchema },
    ]),
  ],
  providers: [DocumentService],
  controllers: [DocumentController],
})
export class DocumentModule {}
