// Listen for the browser action button to be clicked
chrome.browserAction.onClicked.addListener(function(tab) {

  // Inject the styles.css file into the active tab's content script
  chrome.tabs.insertCSS(tab.id, {file: "styles.css"});

  // Toggle the "dark-mode" class on the body element
  chrome.tabs.executeScript(tab.id, {
    code: `
      document.body.classList.toggle("dark-mode");
    `
  });
});
