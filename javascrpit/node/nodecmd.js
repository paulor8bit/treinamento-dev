const nodeCmd = require('node-cmd');
nodeCmd('dir', (err, data, stderr) => console.log(data));