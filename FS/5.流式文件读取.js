const fs = require('fs');

//流式读取
const rs = fs.createReadStream('./资料/video.mp4');

//绑定data事件 chunk快
rs.on('data', chunk => {

})


//绑定end事件
rs.on('end', () => {
    console.log('读取完成');
})