console.log("Start");

setTimeout(() => {
  console.log("Timer 1");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
});

queueMicrotask(() => {
  console.log("Microtask 1");
});

setTimeout(() => {
  console.log("Timer 2");
}, 0);

console.log("End");