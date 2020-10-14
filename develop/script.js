// reddit API
// =======================================================
var CLIENT_ID = "RWhVtoOoO6-pLA";
var URI = "https://mikevitelli.github.io/chopCheese/";

var url = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=code&state=rand&redirect_uri=${URI}&duration=permanent&scope=read`;

$.ajax({
  url: url,
  method: "GET",
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log("error", error);
  });

// =======================================================
// GIPHY API

var giphyKey = "QZW2fQn2JVqIqSnBTL5uNajwBc3KR8qE";

var queryURL =
  "https://api.giphy.com/v1/gifs/trending?api_key=QZW2fQn2JVqIqSnBTL5uNajwBc3KR8qE";

$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  console.log(response);
});

// =======================================================

// =======================================================
// Wiki API
// =======================================================
