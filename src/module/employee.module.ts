import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from 'src/entity/employee.entity';
import { EmployeeController } from 'src/controller/employee.controller';
import { EmployeeService } from 'src/service/employee.service';

@Module({
    imports: [TypeOrmModule.forFeature([Employee])],
    controllers: [EmployeeController],
    providers: [EmployeeService],
})
export class EmployeeModule {}
