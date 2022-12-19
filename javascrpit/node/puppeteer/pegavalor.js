
const puppeteer = require("puppeteer");
puppeteer
  .launch({
     defaultViewport: {
      slowMo: 9250, //esperar carregar 
      width: 1280,
      height: 2000,
      
    },
  })
  .then(async (browser) => {
    const page = await browser.newPage();
    await page.goto("https://hetrixtools.com/blacklist-check/");

    //usar o copy Selector
    const inputElement = await page.$('#sIPz');
    await inputElement.type('IP');
  
    // Clique no botão "Blacklist Check"
    const buttonElement = await page.$('#chkbtn');
    await buttonElement.click();
    // console.log(`Página carregada: ${page.url()}`);
    // await page.waitFor(30000);
    
    const conteudo = await page.$eval('#loadingresults > center', element => element.textContent);

    console.log(conteudo);
  
    await browser.close();
  });

  