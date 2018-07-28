const fs = require('fs');
const path = require('path');

const placeholder = '<div id="replaceMe">{{replaceMe}}</div>';
const mainPlaceholder = `{{mainPlaceholder}}`;

function readFile(pathname, dynamicContent) {
    return new Promise((resolve, reject) => {
        if (!pathname) {
            throw new ReferenceError('Argument "pathname" cannont be undefined.');
        }

        // let cont = dynamicContent;

        fs.readFile(pathname, "utf8", (err, data) => {
            if (err) {
                console.dir(err);
                reject(err);
                return;
            }

            if (dynamicContent) {
                data = data.replace(placeholder, dynamicContent);
            }

            resolve(data);

        });
    });

}

module.exports = (res, config) => {

    let layoutPath = path.join(__dirname, `../${config.layout}`);
    let layoutString;

    res.view = (pathname, dynamicContent) => {
        pathname = path.join(__dirname, `../${pathname}`);

        fs.readFile(layoutPath, "utf8", (err, data) => {
            if (err) {
                console.dir(err);
                res.writeHead(500, {
                    'Content-Type': 'text/plain'
                });

                res.end(`Could not read file path "${pathname}"`);
                return;
            }

            layoutString = data;

            readFile(pathname, dynamicContent)
                .then((data) => {
                    res.writeHead(200, {
                        'Content-Type': 'text/html'
                    });

                    res.write(layoutString.replace(mainPlaceholder, data));
                    res.end();
                })
                .catch(err => {
                    console.dir(err);
                    res.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });

                    res.end(`Could not read file path "${pathname}"`);
                });
        });
    }

    res.staticFile = (pathname, contentType) => {
        pathname = path.join(__dirname, `../${pathname}`);
        readFile(pathname)
            .then(data => {
                res.writeHead(200, {
                    'Content-Type': contentType
                });

                res.write(data);
                res.end();
            })
            .catch(err => {
                console.dir(err);
                res.writeHead(500, {
                    'Content-Type': 'text/plain'
                });

                res.end(`Could not read file path "${pathname}"`);
            });
    }
}