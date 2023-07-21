$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Test Gmail Login",
  "description": "",
  "id": "test-gmail-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Test Facebook login",
  "description": "",
  "id": "test-gmail-login;test-facebook-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "I open Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I go to sign in page",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"\u003cemail or phone\u003e\" and click on next button and enter valid \"\u003cpassword\u003e\" and click on next button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should be able to sign in successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "test-gmail-login;test-facebook-login;",
  "rows": [
    {
      "cells": [
        "email or phone",
        "password"
      ],
      "line": 8,
      "id": "test-gmail-login;test-facebook-login;;1"
    },
    {
      "cells": [
        "sm.madadpour@gmail.com",
        "870014207_SM"
      ],
      "line": 9,
      "id": "test-gmail-login;test-facebook-login;;2"
    },
    {
      "cells": [
        "me.madadpour@gmail.com",
        "mehdi2017"
      ],
      "line": 10,
      "id": "test-gmail-login;test-facebook-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "Test Facebook login",
  "description": "",
  "id": "test-gmail-login;test-facebook-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "I open Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I go to sign in page",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"sm.madadpour@gmail.com\" and click on next button and enter valid \"870014207_SM\" and click on next button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should be able to sign in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_open_Chrome_browser()"
});
formatter.result({
  "duration": 4777632200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_go_to_sign_in_page()"
});
formatter.result({
  "duration": 13122692700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sm.madadpour@gmail.com",
      "offset": 15
    },
    {
      "val": "870014207_SM",
      "offset": 81
    }
  ],
  "location": "LoginSteps.i_enter_valid_and_click_on_next_button_and_enter_valid_and_click_on_next_button(String,String)"
});
formatter.result({
  "duration": 6523700100,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d//input[@name\u003d\u0027Passwd\u0027]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-GNT0J8G\u0027, ip: \u0027192.168.43.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat steps.LoginSteps.i_enter_valid_and_click_on_next_button_and_enter_valid_and_click_on_next_button(LoginSteps.java:36)\r\n\tat ✽.When I enter valid \"sm.madadpour@gmail.com\" and click on next button and enter valid \"870014207_SM\" and click on next button(Login.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.i_should_be_able_to_sign_in_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Test Facebook login",
  "description": "",
  "id": "test-gmail-login;test-facebook-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "I open Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I go to sign in page",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"me.madadpour@gmail.com\" and click on next button and enter valid \"mehdi2017\" and click on next button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should be able to sign in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_open_Chrome_browser()"
});
formatter.result({
  "duration": 1965591600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_go_to_sign_in_page()"
});
formatter.result({
  "duration": 4574816500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "me.madadpour@gmail.com",
      "offset": 15
    },
    {
      "val": "mehdi2017",
      "offset": 81
    }
  ],
  "location": "LoginSteps.i_enter_valid_and_click_on_next_button_and_enter_valid_and_click_on_next_button(String,String)"
});
formatter.result({
  "duration": 33079400,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d115.0.5790.98)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-GNT0J8G\u0027, ip: \u0027192.168.43.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 115.0.5790.98, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:2494}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 365465d57792489861af4d91c8ec40ae\n*** Element info: {Using\u003did, value\u003didentifierId}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat steps.LoginSteps.i_enter_valid_and_click_on_next_button_and_enter_valid_and_click_on_next_button(LoginSteps.java:31)\r\n\tat ✽.When I enter valid \"me.madadpour@gmail.com\" and click on next button and enter valid \"mehdi2017\" and click on next button(Login.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.i_should_be_able_to_sign_in_successfully()"
});
formatter.result({
  "status": "skipped"
});
});