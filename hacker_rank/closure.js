function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // ✅ 10 (function scope)
}

function testLet() {
  if (true) {
    let y = 20;
  }
  console.log(y); // ❌ ReferenceError (block scope)
}

for (var i = 0; i < 3; i++) {
  function log() {
    console.log(i);
  }

  setTimeout(log, 1000);
}

// console.log(testVar());
// console.log(testLet());
