

  
const puppeteer = require("puppeteer");
puppeteer
  .launch({
     defaultViewport: {
      slowMo: 7250, //esperar carregar 
      width: 1280,
      height: 2000,
      
    },
  })
  .then(async (browser) => {
    const page = await browser.newPage();
    await page.goto("https://www.psad.com");
    //usar o copy Selector
    const conteudo = await page.$eval('#innerBM133 > div:nth-child(2) > span > a', element => element.textContent);

    console.log(conteudo);
  
    await browser.close();
  });

  