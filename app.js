$(function(){
  // Text for bottom Nav
  $('#bottomNavBar').append('<h3>Thomas Elkins 2017</h3>').css("color", "rgb(226,226,223)")

// Add railroad picture to splash right
$('.transparentImgContainer').append('<img src="resources/track.jpg" id="railroadImg"/>')

//Add text and buttons to splash left
$('.splashLeft').append('<div id="splashText"></div>')
$('#splashText').append('<h1>track bin</h1>').css("text-align", "center")
$('.splashLeft').append('<div id="chooseTracksButton">')
$('#chooseTracksButton').append('<div id="chooseTracksButtonText"><h3>choose tracks</h3></div>').css("color", "white",)

// Button function direct to Playlist page
$('#chooseTracksButton').click(function(){
  window.location.href='playlistPage.html';
})


//Add text and containers to playlistPage
$('#playlistNav').append('<div id="playlistNavText"></div>')
$('#playlistNavText').append('<h1>click an album to add its tracks to the bin</h1>')
$('#playlistButtonContainer').append('<div id="clearTracksButton">')
$('#clearTracksButton').append('<div id="chooseTracksButtonText"><h3>clear tracks</h3></div>').css("color", "white",)
$('#playlistButtonContainer').append('<div id="submitBinButton">')
$('#submitBinButton').append('<div id="submitBinButtonText"><h3>submit bin</h3></div>').css("color", "white",)

// // global data
// var getData = $.get("https://lit-fortress-6467.herokuapp.com/object");
// var allData = []
// getData.done(function(e) {
//   if (getData.status !== 200) return;
//   for (var i = 0; i < e["results"].length; i++) {
//       allData.push(e["results"][i]);
//   }
// })

// Get request on homepage

var splashArt = [];
$.get("https://lit-fortress-6467.herokuapp.com/object", function(data){
  var albumArr = data["results"];
    for (var i = 0; i < albumArr.length; i++){
      splashArt.push(albumArr[i]["cover_art"])
    }
    // Shuffle order of album array
    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
// Add random images over railroad image
var shuffledArt = shuffleArray(splashArt);
var splashArtOne = shuffledArt[0];
var splashArtTwo = shuffledArt[1];
var splashArtThree = shuffledArt[2];
$('.transparentImgContainer').append('<img id="splashOne" src="images/'+splashArtOne+'"/>')
$('.transparentImgContainer').append('<img id="splashTwo" src="images/'+splashArtTwo+'"/>')
$('.transparentImgContainer').append('<img id="splashThree" src="images/'+splashArtThree+'"/>')

//End get request
})

// Second page album population
$.get("https://lit-fortress-6467.herokuapp.com/object", function(e){
  var results = e["results"];
    for (var i = 0; i < results.length; i++){
      var albumID = results[i]["id"]
      var art = results[i]["cover_art"]
      $('#albumNavBar').append('<div id="'+albumID+'" class="artWrapper"</div>')
      $('#'+albumID+'').append('<img src="images/'+art+'" class="albums"/>')
    }
// // Add album to list on click
//   $('.artWrapper').click(function(){
//     var clickedOn = this.id
//     console.log(e["results"])
//   })
  //End get request
})


//End load function
})
