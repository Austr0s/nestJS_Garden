import { EntityRepository, Repository } from "typeorm";
import { Employee } from "src/entity/employee.entity";

@EntityRepository(Employee)
export class EmployeeRepository extends Repository<Employee> {
    
}