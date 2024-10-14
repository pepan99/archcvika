import { Injectable } from '@nestjs/common';
import { Employee } from './employees.model';

@Injectable()
export class EmployeesService {
  private employees: Employee[] = [
      {
        id: '1',
        firstName: 'John',
        lastName: 'Antonin',
      }
  ];
  getAll(): Employee[] {
    const employees = this.employees;
    return employees;
  }

  get(employeeId: string): Employee {
    const employee = this.employees.find((employee)=> employee.id === employeeId);
    return employee;
  }
}
