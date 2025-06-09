class Minstack {
  constructor() {
    this.stack = [];
    this.min = [];
  }

  /**
   * Add value to the stack to the end
   * @param {*} value
   * @returns voo
   */
  push(value) {
    this.stack.push(value);
    if (this.min.length === 0 || value <= this.getMin()) this.min.push(value);
  }

  /**
   * Remove the value from the end of the stack
   * @param {*} value
   * @returns void
   */
  pop() {
    const lastElement = this.stack.pop();
    if (lastElement === this.getMin()) this.min.pop();
    return lastElement;
  }

  /**
   * Display the last value from the end of the stack
   * @returns integer
   */
  top() {
    return this.stack[this.stack.length - 1];
  }

  /**
   * Get the min from the stack
   * @returns integer
   */
  getMin() {
    return this.min[this.min.length - 1];
  }
}

const stack = new Minstack();
stack.push(1); // add the value to end
stack.push(2); // add the value to end
stack.push(3); // add the value to end
stack.push(-3); // add the value to end
stack.pop(); // remove the last element
stack.pop(); // remove the last element
stack.top(); // display the last the element
console.log(stack.getMin()); // get the min value in the stack
