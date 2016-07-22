'use strict';

function printMsg(msg) {
   console.log(msg);
}

let cb = printMsg;

setTimeout(cb('TIMED OUT!'), 300);
