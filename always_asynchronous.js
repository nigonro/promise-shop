'use strict';

let promise = new Promise((fulfill, reject) => {
  fulfill('PROMISE VALUE');    
});

promise.then(value => console.log(value));
console.log('MAIN PROGRAM');

