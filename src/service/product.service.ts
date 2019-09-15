import { Injectable } from "@nestjs/common";
import { Product } from 'src/entity/product.entity';
import { ProductRepository } from "src/repository/product.repository";
import { BaseService } from "src/commons/base.service";

@Injectable()
export class ProductService extends BaseService<Product> {

    constructor(
        private readonly productRepository: ProductRepository,
        ){
            super(productRepository);
        }
}