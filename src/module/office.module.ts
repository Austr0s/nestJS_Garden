import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Office } from 'src/entity/office.entity';
import { OfficeController } from 'src/controller/office.controller';
import { OfficeService } from 'src/service/office.service';

@Module({
    imports: [TypeOrmModule.forFeature([Office])],
    controllers: [OfficeController],
    providers: [OfficeService],
})
export class OfficeModule {}
