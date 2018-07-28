const http = require('http');
const fs = require('fs');
const formidable = require('formidable');

http.createServer((req, res) => {
    if (req.method === 'GET') {
        fs.readFile('./index.html', 'utf8', (err, data) => {
            if (err) {
                console.log(err);
                return;
            }

            res.writeHead(200, {
                'Content-Type': 'text/html'
            })

            res.write(data);
            res.end();
        })


    } else {
        let form = new formidable.IncomingForm();

        form.parse(req, (err, fields, files) => {
            if (err) {
                console.log(err);
            }

            let file = files.upload;
            let tempPath = file.path;
            let fileName = file.name;

            fs.rename(tempPath, './files/' + fileName, err => {
                if (err) {
                    console.log(err);
                }
            })

            res.end();
        });
    }
}).listen(1212);