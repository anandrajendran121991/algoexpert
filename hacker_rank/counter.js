class Counter {
  constructor() {
    this.counter = 0;
  }

  increment() {
    this.counter++;
    return this.counter;
  }

  decrement() {
    this.counter--;
    return this.counter;
  }

  reset() {
    this.counter = 0;
    return this.counter;
  }
}

const counter = new Counter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.reset());
