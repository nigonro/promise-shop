'use strict';

const HTTP = require('q-io/http');
const BufferStream = require('q-io/buffer-stream');

let response = HTTP.read('http://localhost:1337');

response.then(body => {
  console.log(JSON.parse(body.toString('utf-8')));
});
