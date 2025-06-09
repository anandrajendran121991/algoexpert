import { Notifiable } from "../models/interfaces";

export class NotificationService {
  static send(recipient: Notifiable, message: string): void {
    recipient.notify(message);
  }
}
