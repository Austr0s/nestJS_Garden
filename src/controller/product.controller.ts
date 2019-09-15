import { BaseController } from "src/commons/base.controller";
import { Product } from "src/entity/product.entity";
import { ProductService } from "src/service/product.service";
import { Controller } from "@nestjs/common";
import { ApiUseTags } from "@nestjs/swagger";

@ApiUseTags('products')
@Controller('products')
export class ProductController extends BaseController<Product> {

    constructor(private readonly productService: ProductService) {
        super(productService);
    }

}