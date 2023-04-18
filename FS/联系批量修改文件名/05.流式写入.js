const fs = require('fs');

//创建流式写入(适合写入大型文件或者频繁的写入文件)
const ws = fs.createWriteStream('./观书有感.txt');
ws.write('半亩方开一件开\r\n')
ws.write('天光云影共徘徊\r\n')
ws.write('问渠那得清如许\r\n')
ws.write('唯有源头活水来\r\n')

//关闭写入
ws.close()