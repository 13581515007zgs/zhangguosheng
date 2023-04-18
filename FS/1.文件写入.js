//文件写入需要利用node的fs模块
const fs = require('fs');
//文件写入的api是wirteFile 参数一共有4个 （1）文件名 (2)文件内容 （3）文件配置 （4）回调

//异步写入
// fs.writeFile('./zgssss.txt', '我是张国生', err => {
//     //写入失败err 写入成功null
//     if (err) {
//         console.log("写入失败")
//         return
//     }
//     console.log("写入成功")
// })

//同步写入
fs.writeFileSync('./我是同步的', '同步写法')