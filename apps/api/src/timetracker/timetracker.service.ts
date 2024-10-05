import { Injectable } from '@nestjs/common';
import { Employee } from 'src/employees/employees.model';
import { EmployeesService } from 'src/employees/employees.service';
import { ClockEvent, EventType } from 'src/timetracker/timetracker.model';

@Injectable()
export class TimetrackerService {
  constructor(private readonly employeesService: EmployeesService) {}
  getAll(): Employee[] {
    return this.employeesService.getAll();
  }

  createClockEvent(employeeId: string, event: EventType): ClockEvent {
    const employee = this.employeesService.get(employeeId);

    if (!employee) {
      console.error('Given employeeID does not exist.');
      return;
    }

    const newEvent: ClockEvent = {
      id: 'xy',
      userId: employee.id,
      time: new Date(),
      event: event,
    };
    return newEvent;
  }
}
