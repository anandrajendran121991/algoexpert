import TimeSlot from "./TimeSlot";
import { Schedulable, Notifiable } from "./interfaces";

export class User implements Schedulable, Notifiable {
  public bookedSlots: TimeSlot[] = [];

  constructor(public id: string, public email: string) {}

  isAvailable(slot: TimeSlot): boolean {
    return !this.bookedSlots.some((s) => s.conflictWith(slot));
  }

  book(slot: TimeSlot): void {
    this.bookedSlots.push(slot);
  }

  notify(message: string): void {
    console.log(`Email to ${this.email}: ${message}`);
  }
}
