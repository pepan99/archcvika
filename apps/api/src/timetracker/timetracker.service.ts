import { Injectable, NotFoundException } from '@nestjs/common';
import { EmployeesService } from 'src/employees/employees.service';
import type { ClockEvent, EventType } from 'src/timetracker/timetracker.model';

@Injectable()
export class TimetrackerService {
  private clockEvents: ClockEvent[] = [];
  constructor(private readonly employeesService: EmployeesService) {}
  getAll(): ClockEvent[] {
    return this.clockEvents;
  }

  createClockEvent(employeeId: string, event: EventType): ClockEvent {
    const employee = this.employeesService.get(employeeId);

    if (!employee) {
      throw new NotFoundException(`Employee with id: ${employeeId} does not exist`);
    }

    const newEvent: ClockEvent = {
      id: 'xy',
      userId: employee.id,
      time: new Date(),
      event: event,
    };
    this.clockEvents.push(newEvent);
    return newEvent;
  }
}
