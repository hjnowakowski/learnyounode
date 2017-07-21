var fs = require('fs');

var buf = fs.readFileSync('/usr/local/lib/node_modules/learnyounode/node_apidoc/buffer.html');
console.log(buf.toString());
