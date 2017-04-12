var app = function(){
  var url = "https://api.spotify.com/v1/search?q=cats&type=album";

  makeRequest(url, requestComplete)
}

window.onload = app;