const fs = require('fs');

//1-1 mkdir创建文件夹
// fs.mkdir('./html', err => {
//     if (err) {
//         console.log("创建失败")
//         return
//     }
//     console.log("创建成功")
// })

//1-2递归创建文件见
// fs.mkdir('./a/b/c', { recursive: true }, err => {
//     if (err) {
//         console.log('创建失败')
//         return
//     }
//     console.log('创建成功')
// })


//2-1读取文件夹
// fs.readdir('./', (err, data) => {
//     console.log(data);
// })


//3-1文件夹
// fs.rm('./html', err => {
//     if (err) {
//         console.log('删除失败')
//         return;
//     }
//     console.log('删除成功')
// })

//3-2递归删除文件夹
fs.rm('./a', { recursive: true }, err => {
    if (err) {
        console.log('删除失败')
        return;
    }
    console.log('删除成功')
})