// @ts-check

var flag = false;
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  // If the received message has the expected format...
  console.log("Content Script executed");
  if (msg.text === "needDOM") {
    // Call the specified callback, passing
    // the web-page's DOM content as argument
    document.addEventListener("mouseup", highlight, flag);
  }
});

async function highlight() {
  var text = document.getSelection().toString();
  if (!text) return;

  var re = /[A-Z][a-z]+/g;

  var m;
  var list = [];
  while ((m = re.exec(text))) {
    list.push(m[0]);
  }
  chrome.storage.sync.get(
    {
      school: ""
    },
    async function(items) {
      let uni = items.school;
      const school = uni.replace(" ", "+");
      var key = list[0] + "+" + list[list.length - 1] + "+" + uni; // Add University
      key = key.toLowerCase();
      var value = await getAPI(key);
	  if(value==null) return;
	  console.log(value);
      flag = false;
    }
  );
}

const getAPI = key =>
  fetch(`https://primeval-rain-199602.appspot.com/${key}`).then(response =>
    response.json()
  );
