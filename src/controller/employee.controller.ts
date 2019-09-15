import { BaseController } from "src/commons/base.controller";
import { Controller } from "@nestjs/common";
import { ApiUseTags } from "@nestjs/swagger";
import { Employee } from "src/entity/employee.entity";
import { EmployeeService } from "src/service/employee.service";

@ApiUseTags('employees')
@Controller('employees')
export class EmployeeController extends BaseController<Employee> {

    constructor(private readonly employeesService: EmployeeService) {
        super(employeesService);
    }

}