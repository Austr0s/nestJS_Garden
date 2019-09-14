import { BaseController } from "src/commons/base.controller";
import { Controller } from "@nestjs/common";
import { ApiUseTags } from "@nestjs/swagger";
import { Office } from "src/entity/office.entity";
import { OfficeService } from "src/service/office.service";

@ApiUseTags('offices')
@Controller('offices')
export class OfficeController extends BaseController<Office> {

    constructor(private readonly officeService: OfficeService) {
        super(officeService);
    }

}