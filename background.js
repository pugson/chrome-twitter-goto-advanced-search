chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.create({'url': "https://twitter.com/search-advanced?lang=en"});
});