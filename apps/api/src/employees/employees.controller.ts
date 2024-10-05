import { Controller, Get } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employee } from './employees.model';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  getAll(): Employee[] {
    return this.employeesService.getAll();
  }

}
