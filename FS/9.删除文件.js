const fs = require('fs');

//1-1
// fs.unlink('./zh.txt', err => {
//     if (err) {
//         console.log("删除失败")
//         return;
//     }
//     console.log("删除成功")
// })

//1-2
fs.rm('./zgssss.txt', err => {
    if (err) {
        console.log("删除失败")
        return;
    }
    console.log('删除成功')
})