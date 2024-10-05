import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { TimetrackerModule } from './timetracker/timetracker.module';

@Module({
  imports: [EmployeesModule, TimetrackerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
