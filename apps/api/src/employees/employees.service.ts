import { Injectable } from '@nestjs/common';
import { Employee } from './employees.model';

@Injectable()
export class EmployeesService {
  getAll(): Employee[] {
    const employees: Employee[] = [
      {
        id: '1',
        firstName: 'John',
        lastName: 'Antonin',
      },
    ];
    return employees;
  }

  get(id: string): Employee {
    return {
      id: id,
      firstName: 'John',
      lastName: 'Antonin',
    };
  }
}
