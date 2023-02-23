chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.insertCSS({file: "styles.css"});
});
