const fs = require('fs');

//异步写入
fs.appendFile('./zgs.txt', '，我是你大哥', err => {
    if (err) {
        console.log('追加写入失败')
        return
    }
    console.log('追加写入成功')
})


//同步写入
fs.appendFileSync('./zgssss.txt', '，我是你大哥')


//writeFile也可以进行追加
fs.writeFile('./zgs.txt', '我是你老弟', { flag: 'a' }, err => {
    if (err) {
        console.log('追加写入失败')
        return
    }
    console.log('追加写入成功')
})