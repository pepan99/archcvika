import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { TimetrackerService } from './timetracker.service';
import { NewClockEventDto } from './dto/NewClockEvent.dto';
import { ClockEvent } from 'src/timetracker/timetracker.model';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('timetracker')
export class TimetrackerController {
  constructor(private readonly timetrackerService: TimetrackerService) {}

  @Get()
  getAll(): ClockEvent[] {
    return this.timetrackerService.getAll();
  }

  @Post(':id')
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  createNewClockEvent(
    @Param('id') id: string,
    @Body() data: NewClockEventDto,
  ): ClockEvent {
    return this.timetrackerService.createClockEvent(id, data.eventType);
  }
}
