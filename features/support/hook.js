import { BeforeAll, AfterAll, Before } from "@cucumber/cucumber";
import config from "../../config.js";
import { Builder, Capabilities, By, until } from "selenium-webdriver";

let driver = config.driver;

BeforeAll(async function () {
  await driver.manage().window().maximize();
  await driver.manage().setTimeouts({ implicit: 10000 });
});

AfterAll(async function () {
  await driver.quit();
});
