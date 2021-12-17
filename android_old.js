var wd = require("wd");
var assert = require("assert");
var asserters = wd.asserters;

desiredCaps = {
  "browserstack.user":
    process.env.BROWSERSTACK_USERNAME || "BROWSERSTACK_USERNAME",
  "browserstack.key":
    process.env.BROWSERSTACK_ACCESS_KEY || "BROWSERSTACK_ACCESS_KEY",
  build: "Node Android",
  name: "single_test",
  device: "Samsung Galaxy S10",
  app: "bs://bfc5c2fb5961ffaae75e9db4c29a2374e6172108",
  "browserstack.debug": "true",
  autoGrantPermissions: "true",
  "browserstack.enableCameraImageInjection": "true",
};
driver = wd.promiseRemote("http://hub-cloud.browserstack.com/wd/hub");

driver
  .init(desiredCaps)
  .then(function () {
    return driver.execute(
      'browserstack_executor: {"action":"cameraImageInjection", "arguments": {  "imageUrl" : "media://d63366c7e331c1b23e0d2c1faa787eea8c3d9d21"}}'
    );
  })
  .then(function () {
    return driver.waitForElementById(
      "com.bsstag.cameraimage:id/button",
      asserters.isDisplayed && asserters.isEnabled,
      30000
    );
  })
  .then(function (searchElement) {
    return searchElement.click();
  })
  // .then(function () {
  //   return driver.waitForElementById(
  //     "com.bsstag.cameraimage:id/button",
  //     asserters.isDisplayed && asserters.isEnabled,
  //     30000
  //   );
  // })
  // .then(function (searchElement) {
  //   return searchElement.click();
  // })
  // .then(function () {
  //   return driver.waitForElementById(
  //     "com.android.permissioncontroller:id/permission_allow_foreground_only_button",
  //     asserters.isDisplayed && asserters.isEnabled,
  //     30000
  //   );
  // })
  // .then(function (searchElement) {
  //   return searchElement.click();
  // })
  .then(function () {
    return driver.waitForElementByXPath(
      '(//GLButton[@content-desc="NONE"])[2]',
      asserters.isDisplayed && asserters.isEnabled,
      30000
    );
  })
  .then(function (searchElement) {
    return searchElement.click();
  })
  // .then(function () {
  //   return driver.waitForElementByAccessibilityId(
  //     "Take photo",
  //     asserters.isDisplayed && asserters.isEnabled,
  //     30000
  //   );
  // })
  // .then(function (searchElement) {
  //   return searchElement.click();
  // })
  // .then(function () {
  //   return driver.waitForElementByAccessibilityId(
  //     "Done",
  //     asserters.isDisplayed && asserters.isEnabled,
  //     30000
  //   );
  // })
  // .then(function (searchElement) {
  //   return searchElement.click();
  // })
  .then(function () {
    return driver.waitForElementById(
      "com.sec.android.app.camera:id/okay",
      asserters.isDisplayed && asserters.isEnabled,
      30000
    );
  })
  .then(function (searchElement) {
    return searchElement.click();
  })
  //   .then(function (searchInput) {
  //     return searchInput.sendKeys("BrowserStack");
  //   })
  //   .then(function () {
  //     return driver.elementsByClassName("android.widget.TextView");
  //   })
  //   .then(function (search_results) {
  //     assert(search_results.length > 0);
  //   })
  .fin(function () {
    return driver.quit();
  })
  .done();
