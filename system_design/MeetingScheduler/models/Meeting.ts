import TimeSlot from "./TimeSlot";
import { MeetingRoom } from "./MeetingRoom";
import { User } from "./User";

export class Meeting {
  constructor(
    public slot: TimeSlot,
    public room: MeetingRoom,
    public attendees: User[]
  ) {}
}
