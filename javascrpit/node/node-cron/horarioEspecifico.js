var cron = require('node-cron');


cron.schedule('0 57 8 * * *', () => {
  console.log('8:57');
});

cron.schedule('0 58 8 * * *', () => {
    console.log('8:58');
  });
  

  // https://www.npmjs.com/package/node-cron