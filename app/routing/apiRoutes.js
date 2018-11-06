//Uploading the application data file
var appData = require("../data/friends.js");

module.exports = function(app) {
    //API GET Request to show JSON of all app data
    app.get("/api/data", function(req, res) {
        res.json(appData);
    });
    //API POST Request to push JSON data from submitted form to the application data array
    app.post("/api/data", function(req, res) {
        //Store the new user object
        var newUser = req.body;
        console.log(newUser);
        //Set up the variable to store the total difference between scores
        var totalDifference = 0;
        //Create an object that we will populate our best match in
        var bestMatch = {
            name: "",
            photo: "",
            totalScoreDifference: 0
        }
        //Create an array to hold each total difference
        var scoreDifferences = [];
        //We have to loop through the data array to compare the new user object to each object already stored
        for (i = 0; i < appData.length; i++) {
            //Store the friend object for comparison
            var comparisonFriend = appData[i];
            //Reset the total difference to 0
            totalDifference = 0;
            //Loop through the scores from the new user's responses
            for (j = 0; j < newUser.scores.length; j++) {
                //Find the absolute value of the difference between each score to each question response and store it
                var difference = Math.abs(newUser.scores[j] - comparisonFriend.scores[j]);
                //And add to the total difference each time
                totalDifference += difference;
                scoreDifferences.push(totalDifference);
                comparisonFriend.difference = totalDifference;
            }
            //Store the lowest difference
            var lowestDifference = Math.min(...scoreDifferences);
            //And use it to determine which is the best match
            if (lowestDifference = comparisonFriend.difference) {
                bestMatch.name = comparisonFriend.name;
                bestMatch.photo = comparisonFriend.photo;
                bestMatch.scores = comparisonFriend.scores;
                bestMatch.difference = comparisonFriend.difference;
            }
        }
        //Add the new user to our data
        appData.push(newUser);
        //And send our best match object to the front end
        res.json(bestMatch);
    });
};