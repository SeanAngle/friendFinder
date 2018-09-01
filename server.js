// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var Friends = require("./app/data/friends");

// Sets up the Express App

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Friends (DATA)
// Start with default friend

var friend = new Friends();
var friend1 =
    {
        name: "John Kim",
        picture: "https://www.thelocal.de/userdata/images/article/fa6fd5014ccbd8f4392f716473ab6ff354f871505d9128820bbb0461cce1d645.jpg",
        scores: [
            1,
            3,
            2,
            5,
            3,
            2,
            1,
            2,
            3,
            4
        ]
    };
var friend2 =
    {
        name: "Mike Soto",
        picture: "http://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_koala02%20copy.jpg",
        scores: [
            3,
            2,
            4,
            3,
            2,
            4,
            3,
            2,
            1,
            4
        ]
    };

friend.addFriend(friend1);
friend.addFriend(friend2);





// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });