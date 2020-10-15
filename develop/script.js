var userData = "tater tots";
var giphyTiles = 2;

// =======================================================
// reddit API
// var CLIENT_ID = "RWhVtoOoO6-pLA";
// var URI = "https://mikevitelli.github.io/chopCheese/";

// var url = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=code&state=rand&redirect_uri=${URI}&duration=permanent&scope=read`;

// $.ajax({
//   url: url,
//   method: "GET",
// })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log("error", error);
//   });

// =======================================================
// GIPHY API

var giphyKey = "QZW2fQn2JVqIqSnBTL5uNajwBc3KR8qE";
var search = userData.replace(" ", "+");

var queryURL = `https://api.giphy.com/v1/gifs/random?limit=2&api_key=${giphyKey}&tag=${search}`;

// make as many requests as giphy tiles
for (let i = 0; i < giphyTiles; i++) {
	$.ajax({
		url: queryURL,
		method: "GET",
		//after the data from the AJAX request comes back
	}).then(function (response) {
		// assign URL to proper img tag

		$("#gif-" + (i + 1)).attr("src", response.data.image_original_url);
	});
}

// =======================================================

// =======================================================
// Wiki API

// var userData = "tater tots";
// var searchQuery = userData.replace(" ", "%20");

// var queryURL = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchQuery}&origin=*`;

// $.ajax({
//   url: queryURL,
//   method: "GET",
//   //after the data from the AJAX request comes back
// }).then(function (response) {
//   // save the img url property

//   // fill in dummy block with image from AJAX req

//   console.log(response);
// });
// =======================================================

// =======================================================
// YouTube API
var userData = "tater tots";
var youtubeAPIkey = "AIzaSyBgEdkUbHxjy56Ij2mu4mZMfMc7I8pL280";

var queryURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${youtubeAPIkey}&type=video&q=${userData}`;

$.ajax({
	url: queryURL,
	method: "GET",
	//after the data from the AJAX request comes back
}).then(function (response) {
	// Console log info from 5 videos
	console.log(response);
	//log first videos ID
	console.log(response.items[0].id.videoId);
	// $("#youtube").attr("src", "https://www.youtube.com/embed/Xi28pEbMdTw");
});

var videoID = "Xi28pEbMdTw";

if (window.innerWidth > 500) {
	// Video background script
	// Loads the YouTube IFrame API JavaScript code.
	var tag = document.createElement("script");
	tag.src = "https://www.youtube.com/iframe_api";
	// Inserts YouTube JS code into the page.
	var firstScriptTag = document.getElementsByTagName("script")[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	var player;
	// onYouTubeIframeAPIReady() is called when the IFrame API is ready to go.
	function onYouTubeIframeAPIReady() {
		player = new YT.Player("player", {
			videoId: videoID, // the ID of the video (mentioned above)
			playerVars: {
				autoplay: 1, // start automatically
				controls: 0, // don't show the controls (we can't click them anyways)
				modestbranding: 1, // show smaller logo
				loop: 1, // loop when complete
				mute: 1,
				cc_load_policy: 0, // Hide closed captions
				iv_load_policy: 3,
				playlist: "67w--Fn04xg", // required for looping, matches the video ID
			},
		});
	}
}
