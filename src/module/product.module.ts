import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/entity/product.entity';
import { ProductService } from 'src/service/product.service';
import { ProductController } from 'src/controller/product.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    controllers: [ProductController],
    providers: [ProductService],
})
export class ProductModule {}
