import { Injectable } from "@nestjs/common";
import { BaseService } from "src/commons/base.service";
import { Office } from "src/entity/office.entity";
import { OfficeRepository } from "src/repository/office.repository";

@Injectable()
export class OfficeService extends BaseService<Office> {

    constructor(
        private readonly officeRepository: OfficeRepository,
        ){
            super(officeRepository);
        }
}