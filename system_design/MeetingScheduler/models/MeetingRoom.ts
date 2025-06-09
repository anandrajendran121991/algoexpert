import TimeSlot from "./TimeSlot";
import { Schedulable } from "./interfaces";

export class MeetingRoom implements Schedulable {
  public bookedSlots: TimeSlot[] = [];

  constructor(public name: string) {}

  isAvailable(slot: TimeSlot): boolean {
    return !this.bookedSlots.some((s) => s.conflictWith(slot));
  }

  book(slot: TimeSlot): void {
    this.bookedSlots.push(slot);
  }
}
