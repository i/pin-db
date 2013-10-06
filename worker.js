var casper = require('casper').create({
    verbose: true, 
    logLevel: 'debug',
    pageSettings: {
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.94 Safari/537.4'
    }
});
 
var url = 'https://www.pinterest.com/login/';
 
casper.start(url, function() {
  // search for 'casperjs' from google form
  console.log("page loaded");
  this.fill('.loginForm', { 
    username_or_email: 'mitpindb@gmail.com', 
    password:  'passwordy'
  });
 
  casper.thenClick('.formFooterButtons button');
 
  casper.waitForUrl(/http:\/\/www\.pinterest\.com\/$/, function(){
    console.log("Page Title " + document.title);
    casper.debugHTML('.profileName');
  });
});
 
 
casper.run();
