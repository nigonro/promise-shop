'use strict';

function attachTitle(firstArgument) {
  return `DR. ${firstArgument}`;
}

let promise = Promise.resolve('MANHATTAN');

promise.then(value => {
  return attachTitle(value);
}).then(value => console.log(value));
