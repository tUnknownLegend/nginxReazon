const http = require("http");
const fs = require('fs');

const SERVER_PORT = 3002;

const index = http.createServer((req, res, next) => {
    const {url} = req;

    console.log('request', url);

    const fileName = url === '/' ? '/index.html' : url;
    fs.readFile(`${__dirname}/../public${fileName}`, (err, data) => {
        if (err) {
            res.write('404 not found');
            res.end('error', url, 'not found');
            return;
        }

        res.write(data);
        res.end();
    });
});

index.listen(SERVER_PORT);