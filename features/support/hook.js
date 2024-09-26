// import { Before, AfterAll, BeforeAll } from "@cucumber/cucumber";
// import { Builder, Capabilities,By } from 'selenium-webdriver';

// const capabilities = Capabilities.chrome();
// capabilities.set('chromeOptions', { "w3c": false });
// const driver = new Builder().withCapabilities(capabilities).build();
// Before(async function () {
//     await driver.get('https://trello.com/login');
//     await driver.manage().setTimeouts({ implicit: 4000 });
//     await driver.findElement(By.css('input[data-testid="username"]')).sendKeys('jijis24506@orsbap.com');
//     await driver.findElement(By.css('#login-submit')).click();
//     await driver.manage().setTimeouts({ implicit: 4000 });
//   await driver.findElement(By.css('input[data-testid="password"]')).sendKeys('Crp8xmH8GL=39Fs');
//   await driver.findElement(By.css('#login-submit')).click();
// })

// AfterAll(function(){
//     driver.quit()
// })