import { EntityRepository, Repository } from "typeorm";
import { Office } from "src/entity/office.entity";

@EntityRepository(Office)
export class OfficeRepository extends Repository<Office> {
    
}