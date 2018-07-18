const fs = require('fs');

function handleBigFile(req, res) {
    if (req.path == '/bigFile') {
        const read = fs.createReadStream('./file.txt');

        res.writeHead(200, {
            'content-type': 'text/plain'
        })

        // read.on('data', data => {
        //     res.write(data);
        // })

        // read.on('end', () => {
        //     res.end();
        // })

        //or

        read.pipe(res);

    } else {
        return true;
    }
}

module.exports = handleBigFile;