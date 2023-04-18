//导入http模块
const { Console } = require('console');
const http = require('http');

//创建服务
const server = http.createServer((request, response) => {
    //声明一个变量
    let body = "";
    request.on('data', chunk => {
        body += chunk;
    })

    request.on('end', () => {
        console.log(body)
        response.end('22222')
    })

})

//监听窗口 启动服务
server.listen(9000, () => {
    console.log('服务已经启动')
})