var app = function(){
  var url = "https://api.spotify.com/v1/search?q=cats&type=album";

  makeRequest(url, requestComplete)
}

var requestComplete = function(){
  console.log("this is being succesfully called")
  if (this.status != 200) return; 
  
  var jsonString = this.responseText;
  var catAlbums = JSON.parse(jsonString);
  console.log(catAlbums);
  populateList(catAlbums);
}

var populateList = function(object){
  var ul = document.querySelector("#albums");

  var catAlbums = object.albums.items;

  catAlbums.forEach(function(catAlbum){
    var li = document.createElement("li");
    li.innerText = catAlbum.name;

    // then add the li to the ul
    ul.appendChild(li);
  })
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
}

window.onload = app;