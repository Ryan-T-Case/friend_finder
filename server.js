//These are the dependencies we are setting in order for our server to run
var express = require("express");
var path = require("path");

//Creating an express application to run our server
var app = express();

//Setting up the initial port the server will listen on
var PORT = process.env.PORT || 8080;

//Express methods that allow the server to parse data into useable objects
app.use(express.static(app.public));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//Importing our routing files that handle our data and html files
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);
require("./app/data/friends.js");
//Run the listener to start up the server
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});