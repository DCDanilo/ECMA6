const url = require('url');

let parsed = url.parse('http://www.ilmioserver.com/docs/support/pg12.html?q=25');

console.log(parsed.hostname);