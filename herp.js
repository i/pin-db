var Browser = require('zombie');

var browser = new Browser();

browser.visit("https://www.pinterest.com/login/", function() {
  console.log(browser.text("title"));
  
  browser
    .fill("email", "mitpindb@gmail.com")
    .fill("password", "passwordy");
});
