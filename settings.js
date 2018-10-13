function save_school(){
  var input = document.getElementById('schoolinput').value;
  chrome.storage.sync.set({
    school: input
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Saved!'
    setTimeout(function(){
      status.textContent = '';
    }, 750);
  });
}

function restore_options(){
  chrome.storage.sync.get({
    school: ''
  }, function(items){
    document.getElementById('schoolinput').value = items.school;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_school);
