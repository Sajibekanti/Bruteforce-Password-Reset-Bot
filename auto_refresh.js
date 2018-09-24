// Ok, document.ready is jQuery - but you get the gist
$(document).ready(function() {
  setTimeout(function() {
    location.href = location.href;
    }, 10000); 
  // 10000 == 10 seconds
  // Change this if you want a different refresh period
});