'use strict';

let promise = new Promise((fulfill, reject) => {
  fulfill('I FIRED');    
  reject(new Error('I DID NOT FIRE'))
});

function onReject(error) {
   console.log(error.message);
}

promise.then(
    msg => {
      console.log(msg);
    },
    error => {
      onReject(error);
    }
);
