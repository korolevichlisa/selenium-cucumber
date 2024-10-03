import { When } from "@cucumber/cucumber";
import { By } from "selenium-webdriver";
import config from "../../config.js";

let driver = config.driver;

When("I login with valid credentials", async function () {
  await driver
    .findElement(By.css('input[data-testid="username"]'))
    .sendKeys("jijis24506@orsbap.com");
  await driver.findElement(By.css("#login-submit")).click();
  await driver.manage().setTimeouts({ implicit: 9000 });
  await driver
    .findElement(By.css('input[data-testid="password"]'))
    .sendKeys("Crp8xmH8GL=39Fs");
  await driver.findElement(By.css("#login-submit")).click();
});

When("I clicked the “user account”", async function () {
  await driver.get("https://trello.com/u/jijis24506/account");
});

When("I try to create “automated tasks” board", async function () {
  await driver
    .findElement(By.css('button[data-testid="header-create-menu-button"]'))
    .click();
  await driver
    .findElement(By.css('button[data-testid="header-create-board-button"]'))
    .click();
  await driver.manage().setTimeouts({ implicit: 3000 });
  await driver
    .findElement(By.css('input[data-testid="create-board-title-input"]'))
    .sendKeys("automated tasks");
  await driver
    .findElement(By.css('button[data-testid="create-board-submit-button"]'))
    .click();
  await driver.manage().setTimeouts({ implicit: 3000 });
});

When("I create a list", async function () {
  await driver.findElement(By.css("div.board-canvas")).click();
  await driver
    .findElement(By.css('button[data-testid="list-composer-button"]'))
    .click();
  await driver
    .findElement(By.css('form textarea[data-testid="list-name-textarea"]'))
    .sendKeys("test log");
  await driver
    .findElement(By.css('button[data-testid="list-composer-add-list-button"]'))
    .click();
  await driver.manage().setTimeouts({ implicit: 3000 });
});

When("I create a card", async function () {
  await driver
    .findElement(
      By.css(
        'ol#board > li:last-of-type  div[data-testid="list-footer"] > button:first-of-type',
      ),
    )
    .click();
  await driver
    .findElement(
      By.css('form textarea[data-testid="list-card-composer-textarea"]'),
    )
    .sendKeys("test task");
  await driver.manage().setTimeouts({ implicit: 3000 });
  await driver
    .findElement(
      By.css('form button[data-testid="list-card-composer-add-card-button"]'),
    )
    .click();
  // await driver.findElement(By.css('button[data-testid="list-composer-add-list-button"]')).click()
});

When("I clicked the “menu” button", async function () {
  await driver
    .findElement(
      By.css(
        'div.RPO6eTW4FLJhI0 span[data-testid="OverflowMenuHorizontalIcon"]',
      ),
    )
    .click();
  await driver
    .findElement(By.css(".board-menu-settings-button-react-root button"))
    .click();
});

When("I click delete the board", async function () {
  const deleteBoard = await driver.findElement(
    By.css('button[data-testid="close-board-delete-board-button"]'),
  );
  await driver.actions().scroll(0, 0, 0, 0, deleteBoard).perform();
  await deleteBoard.click();
  await driver.manage().setTimeouts({ implicit: 5000 });
  await driver
    .findElement(
      By.css('button[data-testid="close-board-delete-board-confirm-button"]'),
    )
    .click();
  await driver.manage().setTimeouts({ implicit: 5000 });
  await driver.findElement(By.css("div.qsCZSrobO7JoSv")).click();
  await driver.manage().setTimeouts({ implicit: 5000 });
});
