'use strict';

let promise1 = Promise.resolve('OK');
let promise2 = Promise.reject(new Error('NOK'));

promise1.then(msg => console.log(msg));
promise2.catch(err => {
  console.log('Something happened');
  console.log(err.message);
});
