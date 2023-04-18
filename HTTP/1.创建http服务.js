//导入http模块
const http = require('http');

//创建服务
const server = http.createServer((request, response) => {
    response.setHeader('content-type', 'text/html;charset=utf-8')
    response.end('Hello 我是你')
})

//监听窗口 启动服务
server.listen(9000, () => {
    console.log('服务已经启动')
})