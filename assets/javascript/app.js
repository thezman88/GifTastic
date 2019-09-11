$(document).ready(function() {
//Array for searched topics to be added
var topics = [];

	//Function with AJAX call to GIPHY; Q parameterc for API link set to search term, limit 10 results
  //Create div with respective still and animate image sources with "data-state", "data-still" and "data-animate" attributes
 	function displayNetflixShow() {

	var x = $(this).data("search");
	console.log(x);
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=dc6zaTOxFJmzC&limit=10";

  	console.log(queryURL);
