'use strict';

let promise = new Promise((fulfill, reject) => {
  setTimeout(reject(new Error('REJECTED!')), 300);    
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
