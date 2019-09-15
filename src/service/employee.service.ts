import { Injectable } from "@nestjs/common";
import { BaseService } from "src/commons/base.service";
import { Employee } from "src/entity/employee.entity";
import { EmployeeRepository } from "src/repository/employee.repository";

@Injectable()
export class EmployeeService extends BaseService<Employee> {

    constructor(
        private readonly employeeRepository: EmployeeRepository,
        ){
            super(employeeRepository);
        }
}