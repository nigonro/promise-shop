'use strict';

function parsePromised(toParse) {
  let promise = new Promise((fulfill, reject) => {
    try {
      fulfill(JSON.parse(toParse));
    } catch (e) {
      reject(e);
    }
  });  

  return promise;
}

parsePromised(process.argv[2])
  .then(
    result => console.log(result),
    err => console.log(err)
  );
