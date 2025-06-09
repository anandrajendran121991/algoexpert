console.log(add(1, 2)); // we can call add() before the function cos func are hoisted in js

// non curried function
function add(a, b) {
  return a + b;
}

const add = (a, b) => {
  return a + b;
};

console.log(add(1, 2));

console.log(curriedAdd(1)(2));

//curried function
function curriedAdd(a) {
  return function (b) {
    return a + b;
  };
}
