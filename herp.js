var Browser = require('zombie');

var browser = new Browser();


function logIn() {
  browser.visit("https://www.pinterest.com/login/", function() {
    console.log(browser.text("title"));
  
    browser
      .fill("email", "mitpindb@gmail.com")
      .fill("password", "passwordy");
  });
}

function upload(file) {
  browser.visit('http://www.pinterest.com/mitpindb/') {
    browser.clickLink("View Cart", function() {
    });
  }
}
