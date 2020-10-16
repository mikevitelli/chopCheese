var userData; // = "cats";
var giphyTiles = 2;
var fallbackVideos = {
	"tater tots": ["Xi28pEbMdTw", "4s3VZ4fS_gg", "zLdfPkC9wTE"],
	dogs: ["pRIyR8wbu64", "3dcli9i_pvA", "AcL0MeVZIxM"],
	cats: ["zQIawgxoox4", "rbNkc2xRPpA", "NsUWXo8M7UA"],
};
var videoID;
var fallback = true;
//var element = $("")

<<<<<<< HEAD
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
var youtubeAPIkey = "AIzaSyBgEdkUbHxjy56Ij2mu4mZMfMc7I8pL280";

var queryURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${youtubeAPIkey}&type=video&q=${userData}`;

if (fallback) {
	// get random index from fallback choices
	var randIndex = Math.floor(Math.random() * 3);
	videoID = fallbackVideos[userData][randIndex];
} else {
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
}
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
			height: "100%",
			width: "100%",
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

// on search sumbission click, show container
$(".button").click(function (event) {
	event.preventDefault();
	$("#wrapper").css("display", "block");
	// assign new classes to the elements that move up
	// element.addClass("classname")
});

// +++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++
/*
    opensearch.js
    MediaWiki API Demos
    Demo of `Opensearch` module: Search the wiki and obtain
	results in an OpenSearch (http://www.opensearch.org) format
    MIT License
*/

var url = "https://en.wikipedia.org/w/api.php";

var params = {
	action: "query",
	format: "json",
	prop: "extracts",
	titles: "cat",
	formatversion: "2",
	exsentences: "10",
	exlimit: "1",
	explaintext: "1",
};

url = url + "?origin=*";
Object.keys(params).forEach(function (key) {
	url += "&" + key + "=" + params[key];
});

fetch(url)
	.then(function (response) {
		return response.json();
	})
	.then(function (response) {
		console.log(response);
		var wikiTitle = $("<h2>").text(response.query.pages[0].title);
		var wikiBody = $("<p>").text(response.query.pages[0].extract);
		$("#wikipedia-info").append(wikiTitle).append(wikiBody);
	})
	.catch(function (error) {
		console.log(error);
	});
=======

function render() {
  
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
  
  var youtubeAPIkey = "AIzaSyBgEdkUbHxjy56Ij2mu4mZMfMc7I8pL280";

  var queryURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${youtubeAPIkey}&type=video&q=${userData}`;

  if (fallback) {
    // get random index from fallback choices
    var randIndex = Math.floor(Math.random() * 3);
    videoID = fallbackVideos[userData][randIndex];
  } else {
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
  }
  
  
    // Video background script
    // Loads the YouTube IFrame API JavaScript code.
    var tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    // Inserts YouTube JS code into the page.
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var player;
    


    
    
  




  // +++++++++++++++++++++++++++++++++++++++++++++++++
  // +++++++++++++++++++++++++++++++++++++++++++++++++
  /*
      opensearch.js
      MediaWiki API Demos
      Demo of `Opensearch` module: Search the wiki and obtain
    results in an OpenSearch (http://www.opensearch.org) format
      MIT License
  */

  var url = "https://en.wikipedia.org/w/api.php";

  var params = {
    action: "query",
    format: "json",
    prop: "extracts",
    titles: "cat",
    formatversion: "2",
    exsentences: "10",
    exlimit: "1",
    explaintext: "1",
  };

  url = url + "?origin=*";
  Object.keys(params).forEach(function (key) { url += "&" + key + "=" + params[key]; });

  fetch(url)
    .then(function (response) { return response.json(); })
    .then(function (response) {
      console.log(response);
      var wikiTitle = $("<h2>").text(response.query.pages[0].title);
      var wikiBody = $("<p>").text(response.query.pages[0].extract);
      $("#wikipedia-info").append(wikiTitle).append(wikiBody);

    })
    .catch(function (error) { console.log(error); });

}

// onYouTubeIframeAPIReady() is called when the IFrame API is ready to go.
function onYouTubeIframeAPIReady() {
  console.log(YT)
  player = new YT.Player("player", {
    height: '100%',
    width: '100%',
    videoId: videoID, // the ID of the video (mentioned above)
    playerVars: {
      autoplay: 1, // start automatically
      controls: 0, // don't show the controls (we can't click them anyways)
      modestbranding: 1, // show smaller logo
      loop: 1, // loop when complete
      mute: 1,
      cc_load_policy: 0, // Hide closed captions
      iv_load_policy: 3,
      playlist: videoID, // required for looping, matches the video ID
    },
  });
  console.log(player)
}


  // on search sumbission click, show container
$("#search-button").click(function (event) {
  event.preventDefault();
  $("#wrapper").css("display", "block");
  // grab search value
  userData = $("#search-bar").val();
  render();
  // assign new classes to the elements that move up
  // element.addClass("classname")
});
>>>>>>> 0be4130900c65b3ab123359657e7914b4244de61
