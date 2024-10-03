import { Builder } from "selenium-webdriver";
import { Options } from "selenium-webdriver/chrome.js";

let chromeOptions = new Options();
chromeOptions.addArguments("--headless=new");
chromeOptions.addArguments("--start-maximize");

export default {
  driver: new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build(),
};
