const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    const readSteam = fs.createReadStream('./static/users.json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.writeHead(200,{'Content-type':'application/json'});
    readSteam.pipe(res);

}).listen(3000);