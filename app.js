var flag=false;
  chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
      // If the received message has the expected format...
      console.log("Content Script executed");
      if (msg.text === 'needDOM') {
          // Call the specified callback, passing
          // the web-page's DOM content as argument
            document.addEventListener('mouseup', highlight, flag);
      }
  });

  function highlight(){
    var text=document.getSelection().toString();
    if(text!=''){
      console.log(text);
      flag=false;
    }
  }
