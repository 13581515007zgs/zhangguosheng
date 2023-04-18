const fs = require('fs');
const process = require('process')

//第一种完全复制
// const data = fs.readFileSync('./资料/video.mp4');
// fs.writeFileSync('./资料/video1.mp4', data);
// console.log(process.memoryUsage()) //64110592

//第二种边读边写
// const rs = fs.createReadStream('./资料/video.mp4');
// const ws = fs.createWriteStream('./资料/video2.mp4')
// rs.on('data', chunk => {
//         ws.write(chunk);
//     }) //绑定data事件

// rs.on('end', () => {
//     console.log('复制完成')
//     console.log(process.memoryUsage())//56983552
//     ws.close();
// })

//第三种写法
// const rs = fs.createReadStream('./资料/video.mp4');
// const ws = fs.createWriteStream('./资料/video4.mp4')
// rs.pipe(ws);