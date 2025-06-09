import TimeSlot from "./TimeSlot";

export interface Schedulable {
  isAvailable(slot: TimeSlot): boolean;
}

export interface Notifiable {
  email: string;
  notify(message: string): void;
}
