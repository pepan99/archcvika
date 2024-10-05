export type ClockEvent = {
  id: string;
  userId: string;
  time: Date;
  event: 'clockIn' | 'clockOut';
};
