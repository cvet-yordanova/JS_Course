const cluster = require('cluster');

let cpus = require('os').cpus().length;
let http = require('http');

if (cluster.isMaster) {
    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    }
} else {
    http.createServer(function(req, res) {
        res.writeHead(200);
        res.end('process ' + process.pid + ' says hello')
    }).listen(8000);
}

console.log(cpus);