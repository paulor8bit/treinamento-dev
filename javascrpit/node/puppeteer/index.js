const puppeteer = require("puppeteer");
puppeteer
  .launch({
    slowMo: 7250, //esperar carregar 
    defaultViewport: {
      width: 1280,
      height: 2000,
      
    },
  })
  .then(async (browser) => {
    const page = await browser.newPage();
       await page.goto("https://portodemaceio.com.br");
    await page.screenshot({ path: "porto.png" });
    await browser.close();
    console.log('oi')
  });