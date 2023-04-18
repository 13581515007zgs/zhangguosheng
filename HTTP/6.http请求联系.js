const http = require('http');
const url = require('url');
const server = http.createServer((request, response) => {
    response.setHeader('content-type', 'text/html;charset=utf-8')
    const res = url.parse(request.url, true);
    const pathname = res.pathname;
    let message = "";
    if (pathname == '/login') {
        message = '登陆页面'
    } else if (pathname == '/reg') {
        message = '注册页面'
    } else {
        message = '404 not Found'
    }

    response.end(message);
})

server.listen('9000', () => {
    console.log('启动')
})