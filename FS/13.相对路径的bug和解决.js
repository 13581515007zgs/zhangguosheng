const fs = require('fs');
//问题：node中的相当路径是相对于命令行的路径 此时下面代码会在node学习目录下创建文件
// fs.writeFileSync('./index.html', 'love');

//解决方法__dirname
fs.writeFileSync(__dirname + '/index.html', 'love');