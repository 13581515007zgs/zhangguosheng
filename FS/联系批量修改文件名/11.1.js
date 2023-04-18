const fs = require('fs');
let dirs = fs.readdirSync('./');
dirs.forEach((item, index) => {
    let data = item.split('.');
    const [num, content, dir] = data;
    let sort = index;
    if (sort < 9) {
        sort = "0" + sort;
    }

    let newFile = sort + '.' + content + '.' + dir;
    console.log(newFile)
    fs.renameSync(`./${item}`, `./${newFile}`)
})