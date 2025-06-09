import { User } from "./models/User";
import { MeetingRoom } from "./models/MeetingRoom";
import TimeSlot from "./models/TimeSlot";
import { MeetingScheduler } from "./models/MeetingScheduler";

const user1 = new User("u1", "u1@example.com");
const user2 = new User("u2", "u2@example.com");
const room = new MeetingRoom("Room A");

const scheduler = new MeetingScheduler([room]);

const slot = new TimeSlot(
  new Date("2025-06-08T10:00"),
  new Date("2025-06-08T11:00")
);

scheduler.bookMeeting(slot, [user1, user2]);
