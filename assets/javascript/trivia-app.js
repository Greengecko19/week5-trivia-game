// My logic is good, but my code is not:
// 1. Upon clicking the Start button, clear out selections and start timer
// 2. Store each clicked answer in a variable
// 3. When 30 seconds are up, add up the number of correct and incorrect answers


var correct = 0;
var incorrect = 0;
var time = 0;
var clockRunning = false;


$('#start').on("click", function() { 
    $('input[name="q1"]').attr('checked', false);
    $('input[name="q2"]').attr('checked', false);
    $('input[name="q3"]').attr('checked', false);
    $('input[name="q4"]').attr('checked', false);
    intervalId = setInterval(30000);
    $('#timer').text(intervalId);
    checkAnswers();
});

function checkAnswers() {

    clearInterval(intervalId);

    var answer1 = $('input[name="q1"]').text;
    console.log(answer1);
    if (answer1 == "Pizza") {
        correct++;
    }
    else {
        incorrect++;
        break;
    }

    var answer2 = $('input[name="q2"]').text;
    if (answer1 == "Thumb wrestling") {    
        correct++;
    }
    else {
        incorrect++;
        break;
    }


    var answer3 = $('input[name="q3"]').text;
    console.log(answer3);
    if (answer3 == "A Flock of Seagulls") {
        correct++;
    }
    else {
        incorrect++;
        break;
    }

    var answer4 = $('input[name="q4"]').text;
    console.log(answer4);
    if (answer3 == "Get Smart") {    
        correct++;
    }
    else {
        incorrect++;
        break;
    }
    
}

function timeConverter() {

    var converted = intervalId.timeConverter(intervalId.time);
    console.log(converted);

    $("#timer").text(converted);

    function(t) {
    var seconds = Math.floor(t * 30);

    if (seconds < 31) {
        seconds = "0" + seconds;
        return seconds;
    }
    else {
        // display score
        $('number-correct').text(correct);
        $('number-incorrect').text(incorrect);
        break;
    }

