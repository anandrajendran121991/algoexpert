function reversePolishNotation(tokens) {
  const stack = [];

  for (const token of tokens) {
    switch (token) {
      case "+":
        const sum = stack.pop() + stack.pop();
        stack.push(sum);
        break;
      case "-":
        let a = stack.pop();
        let b = stack.pop();
        stack.push(b - a);
        break;
      case "*":
        const multiply = stack.pop() * stack.pop();
        stack.push(multiply);
        break;
      case "/":
        let a1 = stack.pop();
        let b1 = stack.pop();
        stack.push(Math.trunc(b1 / a1));
        break;
      default:
        stack.push(+token);
    }
  }

  return stack.pop();
}

console.log(reversePolishNotation(["10", "-3", "/"]));
