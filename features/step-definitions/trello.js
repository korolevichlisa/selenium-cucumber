import { Given, When, Then, BeforeAll, AfterAll, Before } from "@cucumber/cucumber";
import { expect as exChai } from "chai";
// import { webdriver } from "selenium-webdriver";
import { Builder, Capabilities,By } from 'selenium-webdriver';

const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).headless().build();


  Given('I am on the Trello site login page', async function () {
    await driver.get('https://trello.com/login');
    await driver.manage().setTimeouts({ implicit: 4000 });
  });

  When('I login with valid credentials', async function () {
    await driver.findElement(By.css('input[data-testid="username"]')).sendKeys('jijis24506@orsbap.com');
    await driver.findElement(By.css('#login-submit')).click();
    await driver.manage().setTimeouts({ implicit: 4000 });
    await driver.findElement(By.css('input[data-testid="password"]')).sendKeys('Crp8xmH8GL=39Fs');
    await driver.findElement(By.css('#login-submit')).click();
  });

  Then('I should see all my boards', async function () {
    exChai(await driver.findElement(By.css('.boards-page-section-header-name')).getText()).to.eql('YOUR WORKSPACES');
  });




  Given('I am logged in as Yelyzaveta', async function () {
    await driver.get('https://trello.com/u/jijis24506/boards');
  });

  When('I clicked the “user account”', async function () {
    await driver.get('https://trello.com/u/jijis24506/account');
  });

  Then('I see the “edit user profile” page', async function () {
    exChai(await driver.findElement(By.css('span.GxX8JLMG4SGAvQ')).getText()).to.eql('test_user');
  });


  Given('I am logged in', async function () {
    await driver.get('https://trello.com/u/jijis24506/boards');
  });

  When('I try to create “automated tasks” board', async function () {
    await driver.findElement(By.css('button[data-testid="header-create-menu-button"]')).click()
    await driver.findElement(By.css('button[data-testid="header-create-board-button"]')).click()
    await driver.manage().setTimeouts({ implicit: 3000 });
    await driver.findElement(By.css('input[data-testid="create-board-title-input"]')).sendKeys('automated tasks')
    await driver.findElement(By.css('button[data-testid="create-board-submit-button"]')).click()
    await driver.manage().setTimeouts({ implicit: 3000 });
  });

  Then('I should see the created board', async function () {
    exChai(await driver.findElement(By.css('div.RPO6eTW4FLJhI0 h1[data-testid="board-name-display"]')).getText()).to.eql('automated tasks');

  });

  Given('I am on the  “automated tasks” board page', async function () {
    await driver.get('https://trello.com/u/jijis24506/boards');
    await driver.findElement(By.css('ul.boards-page-board-section-list li:first-of-type')).click()
  });

  When('I create a list', async function () {
    await driver.findElement(By.css('div.board-canvas')).click()
    await driver.findElement(By.css('button[data-testid="list-composer-button"]')).click()
    await driver.findElement(By.css('form textarea[data-testid="list-name-textarea"]')).sendKeys('test log')
    await driver.findElement(By.css('button[data-testid="list-composer-add-list-button"]')).click()
    await driver.manage().setTimeouts({ implicit: 3000 });
  });

  Then('I see my list', async function () {
    exChai(await driver.findElement(By.css('ol#board li:last-of-type h2[data-testid="list-name"]')).getText()).to.eql('test log');
  });


  Given('I am on the  “automated tasks” board page with list', async function () {
    await driver.get('https://trello.com/u/jijis24506/boards');
    await driver.findElement(By.css('ul.boards-page-board-section-list li:first-of-type')).click()
  });

  When('I create a card', async function () {
    await driver.findElement(By.css('ol#board > li:last-of-type  div[data-testid="list-footer"] > button:first-of-type')).click()
    await driver.findElement(By.css('form textarea[data-testid="list-card-composer-textarea"]')).sendKeys('test task')
    await driver.manage().setTimeouts({ implicit: 3000 });
    await driver.findElement(By.css('form button[data-testid="list-card-composer-add-card-button"]')).click()
    // await driver.findElement(By.css('button[data-testid="list-composer-add-list-button"]')).click()
  });

  Then('I see the created card', async function () {
    exChai(await driver.findElement(By.css('a[data-testid="card-name"]')).getText()).to.eql('test task');
  });

  Given('I am on the board page', async function () {
    await driver.get('https://trello.com/u/jijis24506/boards');
    await driver.findElement(By.css('ul.boards-page-board-section-list li:first-of-type')).click()
  });
  
  When('I clicked the “menu” button', async function () {
    await driver.findElement(By.css('div.RPO6eTW4FLJhI0 span[data-testid="OverflowMenuHorizontalIcon"]')).click()
    await driver.findElement(By.css('.board-menu-settings-button-react-root button')).click()
  });

  Then('I see the ”menu” panel and abilities with workspace', async function () {
    exChai(await driver.findElement(By.css('.board-menu-header-title')).getText()).to.eql('Налаштування');
  });

  Given('I am on the created previous board', async function () {
    await driver.get('https://trello.com/u/jijis24506/boards');
    await driver.findElement(By.css('ul.boards-page-board-section-list li:first-of-type')).click()
    await driver.manage().setTimeouts({ implicit: 3000 });
  });

  Given('I close this board', async function () {
    await driver.findElement(By.css('button.css-1l34k60 span.css-7xst2f')).click()
    await driver.findElement(By.css('div.RPO6eTW4FLJhI0 span[data-testid="OverflowMenuHorizontalIcon"]')).click()
    const closeBoard = await driver.findElement(By.css('button.js-close-board'))
    await driver.actions().scroll(0, 0, 0, 0, closeBoard).perform()
    await closeBoard.click()
    await driver.findElement(By.css('input[data-testid="close-board-confirm-button"]')).click()
    
    // await driver.findElement(By.css('div.RNC8UUAwghG9uA')).click()
    // await driver.findElement(By.css('div.aIwo0vvYqaDzfq')).click()
    // await driver.findElement(By.css('popover-close-board-confirm')).click()
  });

  When('I click delete the board', async function () {
    const deleteBoard = await driver.findElement(By.css('button[data-testid="close-board-delete-board-button"]'))
    await driver.actions().scroll(0, 0, 0, 0, deleteBoard).perform()
    await deleteBoard.click()
    await driver.findElement(By.css('button[data-testid="close-board-delete-board-confirm-button"]')).click()
    await driver.findElement(By.css('div.qsCZSrobO7JoSv')).click()
    await driver.manage().setTimeouts({ implicit: 5000 });

  });

  Then('I deleted board', async function () {
    // console.log(await driver.findElement(By.css('span.QMKgZFIlTLiEJN')).getText())
    // exChai(await driver.findElement(By.css('span.QMKgZFIlTLiEJN'))).to.be.true;
    exChai(await driver.findElement(By.css('ul.boards-page-board-section-list li:first-of-type')).getText()).to.eql('Створити нову дошку');

  });

  AfterAll(function(){
    driver.quit()
})
