'use strict';

function all(p1, p2) {
  let counter = 0;
  let arr = [];

  return new Promise((fulfill, reject) => {
    let t1 = Promise.resolve(p1);
    let t2 = Promise.resolve(p2);

    t1
      .then(result => {
        counter++;
        arr.push(result);
      })
      .then(result => { 
        t2.then(result => {
          counter++;
          arr.push(result);
        });
      })
      .then(result => {
        if (counter === 2) {
          fulfill(arr);
        }
      });
  });
}

all(getPromise1(), getPromise2())
  .then(result => console.log(result))
  .catch(err => console.log(err));
