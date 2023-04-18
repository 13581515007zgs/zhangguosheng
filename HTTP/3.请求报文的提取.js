//导入http模块
const { Console } = require('console');
const http = require('http');

//创建服务
const server = http.createServer((request, response) => {
    //获取请求方法
    // console.log(request.method);
    //获取请求的url
    // console.log(request.url)
    //获取请求行的版本
    // console.log(request.httpVersion);
    //获取请求头的内容
    // console.log(request.headers)
    response.end('222')
})

//监听窗口 启动服务
server.listen(9000, () => {
    console.log('服务已经启动')
})