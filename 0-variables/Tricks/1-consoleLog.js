console.log(console);

// Log only when condition is false
console.assert(5 > 2, "5 is bigger than 2");

// Labels for the output
let age = 23;
console.log({ age });
console.table({ age });

// Group and stay organized
console.group("counts");
for (let i = 0; i < 20; i++) {
  console.count("count");
}
console.groupEnd();

// Test Benchmark
console.time("Loop");
let i = 0;
while (i < 1000000) {
  i++;
}
console.timeEnd("Loop");

// trace function call
function callMe() {
  console.trace("Call me baby");
}

callMe();
callMe();
