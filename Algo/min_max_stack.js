// Feel free to add new properties and methods to the class.
class MinMaxStack {
  constructor() {
    this.minMaxStack = [];
    this.stack = [];
  }
  peek() {
    // Write your code here.
    return this.stack[this.stack.length - 1];
  }

  pop() {
    // Write your code here.
    this.minMaxStack.pop();
    return this.stack.pop();
  }

  push(number) {
    // Write your code here.
    let newMinMax = { min: number, max: number };
    if (this.minMaxStack.length > 0) {
      newMinMax.min = Math.min(
        this.minMaxStack[this.minMaxStack.length - 1].min,
        number
      );
      newMinMax.max = Math.max(
        this.minMaxStack[this.minMaxStack.length - 1].max,
        number
      );
    }
    this.minMaxStack.push(newMinMax);
    this.stack.push(number);
  }

  getMin() {
    // Write your code here.
    return this.minMaxStack[this.minMaxStack.length - 1].min;
  }

  getMax() {
    // Write your code here.
    return this.minMaxStack[this.minMaxStack.length - 1].max;
  }
}

const minMax = new MinMaxStack();
