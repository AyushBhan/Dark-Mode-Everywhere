// Listen for the browser action button to be clicked
chrome.browserAction.onClicked.addListener(function(tab) {

  // Toggle the "dark-mode" class on the body element
  chrome.tabs.executeScript(tab.id, {
    code: `
      document.body.classList.toggle("dark-mode");
    `
  });
});
