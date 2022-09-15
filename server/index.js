const http = require("http");
const fs = require('fs');
const debug = require('debug')

const SERVER_PORT = 3002;

const log = debug('server');

const server = http.createServer((req, res, next) => {
    const {url} = req;

    log('request', url);

    const fileName = url === '/' ? '/index.html' : url;
    fs.readFile(`${__dirname}/../public${fileName}`, (err, data) => {
        if (err) {
            res.write('404 not found');
            log('error', url, 'not found');
            res.end();
            return;
        }
        res.write(data);
        res.end();
    });
});

server.listen(SERVER_PORT);