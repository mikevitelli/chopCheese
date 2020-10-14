// reddit API
// =======================================================
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
var userData = "tater tots".replace(" ", "+");

var queryURL = `https://api.giphy.com/v1/gifs/random?api_key=${giphyKey}&tag=${userData}`;

$.ajax({
  url: queryURL,
  method: "GET",
  //after the data from the AJAX request comes back
}).then(function (response) {
  // save the img url property

  // fill in dummy block with image from AJAX req

  console.log(response);
  console.log(userData);
});

// =======================================================

// =======================================================
// Wiki API
// =======================================================
