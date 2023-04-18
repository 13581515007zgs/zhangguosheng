const http = require('http');
const url = require('url');
const server = http.createServer((request, response) => {
    let res = url.parse(request.url, true)
        //路径
    const pathname = res.pathname;
    //查询字符串
    const name = res.query.name;
    console.log(name, pathname);
    response.end('我是请求体')
})

server.listen('9000', () => {
    console.log('启动成功')
})