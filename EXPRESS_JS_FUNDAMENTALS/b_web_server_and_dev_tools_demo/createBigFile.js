const fs = require('fs');
const file = fs.createWriteStream('./file.txt');

for (let i = 0; i <= 1e5; i++) {
    file.write('lorem ipisum dolor sit amet, consectetur bla bla bla bla')
}

file.end();