import { Then } from "@cucumber/cucumber";
import { expect as exChai } from "chai";
import { By } from "selenium-webdriver";
import config from "../../config.js";

let driver = config.driver;

Then("I should see all my boards", async function () {
  exChai(
    await driver
      .findElement(By.css(".boards-page-section-header-name"))
      .getText(),
  ).to.eql("YOUR WORKSPACES");
});

Then("I see the “edit user profile” page", async function () {
  exChai(
    await driver.findElement(By.css("span.GxX8JLMG4SGAvQ")).getText(),
  ).to.eql("test_user");
});

Then("I should see the created board", async function () {
  exChai(
    await driver
      .findElement(
        By.css('div.RPO6eTW4FLJhI0 h1[data-testid="board-name-display"]'),
      )
      .getText(),
  ).to.eql("automated tasks");
});

Then("I see my list", async function () {
  exChai(
    await driver
      .findElement(
        By.css('ol#board li:last-of-type h2[data-testid="list-name"]'),
      )
      .getText(),
  ).to.eql("test log");
});

Then("I see the created card", async function () {
  exChai(
    await driver.findElement(By.css('a[data-testid="card-name"]')).getText(),
  ).to.eql("test task");
});

Then("I see the ”menu” panel and abilities with workspace", async function () {
  exChai(
    await driver.findElement(By.css(".board-menu-header-title")).getText(),
  ).to.eql("Налаштування");
});

Then("I deleted board", async function () {
  // console.log(await driver.findElement(By.css('span.QMKgZFIlTLiEJN')).getText())
  // exChai(await driver.findElement(By.css('span.QMKgZFIlTLiEJN'))).to.be.true;
  exChai(
    await driver
      .findElement(By.css("ul.boards-page-board-section-list li:first-of-type"))
      .getText(),
  ).to.eql("Створити нову дошку");
});
