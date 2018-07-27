const httpContext = require('http');
const fs = require('fs');
const url = require('url');

const attachfileReader = require('./config/fileReader');
const postParserMiddleware = require('./config/postParser');
const handlers = require('./handlers');
const port = 5000;


function framework(req, res) {

    //attach pathname property from the url object received after parsing
    req.urlData = url.parse(req.url);
    //attach function sendHtml to res
    // res.sendHtml = (path) => {
    //     fs.readFile(path, 'utf8', (err, data) => {
    //         res.writeHead(200, {
    //             'content-type': 'text/html'
    //         })

    //         res.write(data);
    //         res.end();
    //     })
    // }



    attachfileReader(res, {layout: 'views/layout.html'});

    postParserMiddleware(req, res)
        .then(postData => {
            for (let handler of handlers) {
                if (handler(req, res) !== true) {
                    break;
                }
            }

        })
}

const server = httpContext.createServer(framework);

server.listen(port);
console.log(`Listening on port ${port}...`);