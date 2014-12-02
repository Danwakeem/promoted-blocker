//Simple chrome webRequest to call our scripts anytime the borwser loads
//the listed URL
chrome.webRequest.onComplete.addListener({urls: '*://*.twitter.com/*'});