'use strict';
httpProxy = require('http-proxy');

httpProxy.createProxyServer({target:'http://89.208.198.137:8081/'}).listen(80);

httpProxy.createProxyServer({target:'http://89.208.198.137:8081/'}).listen(443);
