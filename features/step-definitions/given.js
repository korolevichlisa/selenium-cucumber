import { Given } from "@cucumber/cucumber";
import config from "../../config.js";
import { By } from "selenium-webdriver";

let driver = config.driver;

Given("I am on the Trello site login page", async function () {
  await driver.get("https://trello.com/login");
  await driver.manage().setTimeouts({ implicit: 4000 });
});

Given("I am logged in as Yelyzaveta", async function () {
  await driver.get("https://trello.com/u/jijis24506/boards");
});

Given("I am logged in", async function () {
  await driver.get("https://trello.com/u/jijis24506/boards");
});

Given("I am on the  “automated tasks” board page", async function () {
  await driver.get("https://trello.com/u/jijis24506/boards");
  await driver
    .findElement(By.css("ul.boards-page-board-section-list li:first-of-type"))
    .click();
});

Given("I am on the  “automated tasks” board page with list", async function () {
  await driver.get("https://trello.com/u/jijis24506/boards");
  await driver
    .findElement(By.css("ul.boards-page-board-section-list li:first-of-type"))
    .click();
});

Given("I am on the board page", async function () {
  await driver.get("https://trello.com/u/jijis24506/boards");
  await driver
    .findElement(By.css("ul.boards-page-board-section-list li:first-of-type"))
    .click();
});

Given("I am on the created previous board", async function () {
  await driver.get("https://trello.com/u/jijis24506/boards");
  await driver
    .findElement(By.css("ul.boards-page-board-section-list li:first-of-type"))
    .click();
  await driver.manage().setTimeouts({ implicit: 3000 });
});

Given("I close this board", async function () {
  await driver
    .findElement(By.css("button.css-1l34k60 span.css-7xst2f"))
    .click();
  await driver
    .findElement(
      By.css(
        'div.RPO6eTW4FLJhI0 span[data-testid="OverflowMenuHorizontalIcon"]',
      ),
    )
    .click();
  const closeBoard = await driver.findElement(By.css("button.js-close-board"));
  await driver.actions().scroll(0, 0, 0, 0, closeBoard).perform();
  await closeBoard.click();
  await driver
    .findElement(By.css('input[data-testid="close-board-confirm-button"]'))
    .click();

  // await driver.findElement(By.css('div.RNC8UUAwghG9uA')).click()
  // await driver.findElement(By.css('div.aIwo0vvYqaDzfq')).click()
  // await driver.findElement(By.css('popover-close-board-confirm')).click()
});
