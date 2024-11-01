import { BeforeAll, AfterAll } from "@cucumber/cucumber";
import config from "../../config.js";

let driver = config.driver;

BeforeAll(async function () {
  await driver.manage().window().maximize();
  await driver.manage().setTimeouts({ implicit: 7000 });
  await driver.get("https://trello.com/login");
});

AfterAll(async function () {
  await driver.quit();
});
