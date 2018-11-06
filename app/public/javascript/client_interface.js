//When the submit button is clicked
$("#submit").on("click", function(event) {
    event.preventDefault();
    //Grab all of the values from the user input
    var userInput = {
        name: $("#name").val(),
        photo: $("#photo").val(),
        scores: [
            parseInt($("#question1").val()),
            parseInt($("#question2").val()),
            parseInt($("#question3").val()),
            parseInt($("#question4").val()),
            parseInt($("#question5").val()),
            parseInt($("#question6").val()),
            parseInt($("#question7").val()),
            parseInt($("#question8").val()),
            parseInt($("#question9").val()),
            parseInt($("#question10").val())
        ]
    }
//Send the new user input object to the application data
$.post("/api/data", userInput, function(data) {
    //Display best match data to modal
    $("#match_name").text(data.name);
    $("#match_image").attr("src", data.photo);
});

});