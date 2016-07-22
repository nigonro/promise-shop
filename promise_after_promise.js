'use strict';

first().then(secret => {
  return second(secret);
}).then(msg => {
  console.log(msg);
});
