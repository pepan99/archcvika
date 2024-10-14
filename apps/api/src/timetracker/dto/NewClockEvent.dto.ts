import { Injectable } from "@nestjs/common";
import { EventType } from "../timetracker.model";
import {IsNotEmpty} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

@Injectable()
export class NewClockEventDto {
  @IsNotEmpty()
  @ApiProperty()
  public eventType: EventType;
};
