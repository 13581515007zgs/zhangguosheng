const fs = require('fs');
// stat  statSync
fs.stat('./', (err, data) => {
    console.log(data)
})