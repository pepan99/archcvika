import { Module } from '@nestjs/common';
import { TimetrackerService } from './timetracker.service';
import { TimetrackerController } from './timetracker.controller';
import { EmployeesModule } from 'src/employees/employees.module';

@Module({
  imports: [EmployeesModule],
  controllers: [TimetrackerController],
  providers: [TimetrackerService],
})
export class TimetrackerModule {}
