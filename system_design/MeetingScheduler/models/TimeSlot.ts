class TimeSlot {
  constructor(public start: Date, public end: Date) {
    this.start = new Date(start);
    this.end = new Date(end);
  }

  conflictWith(other: TimeSlot): boolean {
    return this.start < other.end && other.end < this.end;
  }
}

export default TimeSlot;
