import { Module } from '@nestjs/common';
import { ProductModule } from './module/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModule } from './module/employee.module';
import { OfficeModule } from './module/office.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user',
      password: 'pass',
      database: 'jardineria',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ProductModule,
    EmployeeModule,
    OfficeModule,
  ],
})
export class AppModule {}
