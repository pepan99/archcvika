import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TimetrackerService } from './timetracker.service';
import { Employee } from 'src/employees/employees.model';
import { NewClockEventDto } from './dto/NewClockEvent.dto';
import { ClockEvent } from 'src/timetracker/timetracker.model';

@Controller('timetracker')
export class TimetrackerController {
  constructor(private readonly timetrackerService: TimetrackerService) {}

  @Get()
  getAll(): Employee[] {
    return this.timetrackerService.getAll();
  }

  @Post(':id')
  createNewClockEvent(
    @Param('id') id: string,
    @Body() data: NewClockEventDto,
  ): ClockEvent {
    console.log(typeof id);
    return this.timetrackerService.createClockEvent(id, data.event);
  }
}
