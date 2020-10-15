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

var queryURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBgEdkUbHxjy56Ij2mu4mZMfMc7I8pL280&type=video&q=${userData}`;

$.ajax({
  url: queryURL,
  method: "GET",
  //after the data from the AJAX request comes back
}).then(function (response) {
  // Console log info from 5 videos
  console.log(response);
});
