function printText(text){
  console.log("\ntext");
}
chrome.webNavigation.onCompleted.addListener(function(details) {
  // chrome.tabs.executeScript(details.tabId, {
  //         code:'console.log(document.);'
  //     });

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {text: "needDOM"}, function(response) {

  });
});

});
