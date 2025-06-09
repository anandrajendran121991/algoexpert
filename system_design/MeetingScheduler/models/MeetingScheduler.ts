import { MeetingRoom } from "../models/MeetingRoom";
import TimeSlot from "../models/TimeSlot";
import { User } from "../models/User";
import { Meeting } from "../models/Meeting";
import { NotificationService } from "./NotificationService";

export class MeetingScheduler {
  constructor(private rooms: MeetingRoom[]) {}

  bookMeeting(slot: TimeSlot, attendees: User[]): Meeting | null {
    const room = this.rooms.find((r) => r.isAvailable(slot));
    if (!room) {
      console.log("❌ No room available.");
      return null;
    }

    const unavailable = attendees.filter((u) => !u.isAvailable(slot));
    if (unavailable.length > 0) {
      console.log("❌ Unavailable users:");
      unavailable.forEach((u) => console.log(`- ${u.email}`));
      return null;
    }

    room.book(slot);
    attendees.forEach((u) => u.book(slot));

    const meeting = new Meeting(slot, room, attendees);
    const message = `✅ Meeting booked in '${
      room.name
    }' from ${slot.start.toISOString()} to ${slot.end.toISOString()}`;
    attendees.forEach((u) => NotificationService.send(u, message));

    return meeting;
  }
}
