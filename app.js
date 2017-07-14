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



//End load function
})
