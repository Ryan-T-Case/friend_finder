//The path node package is necessary to run these routes
var path = require("path");

module.exports = function(app) {
    //Route for the survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    //Every other route will just lead to the home page
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};