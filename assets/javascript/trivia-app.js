


// window.onload = function() {
//     $("#start").on("click", startTimer);
// };

var correct = 0;
var incorrect = 0;

function countdown() {
    setInterval(checkAnswers(), 30000);
    clearInterval();
}

function checkAnswers() {

    var answer1 = $('#q1').val();
    console.log(answer1);
    if (answer1 = "Pizza") {
        correct++;
    }
    else {
        incorrect++;
        break;
    }

    var answer2 = $('#q2').val();
    if (answer1 = "Thumb wrestling") {    
        correct++;
    }
    else {
        incorrect++;
        break;
    }


    var answer3 = $('#q3').val();
    console.log(answer3);
    if (answer3 = "A Flock of Seagulls") {
            correct++;
    }
    else {
        incorrect++;
        break;
    }

    var answer4 = $('#q4').val();
    console.log(answer4);
    if (answer3 = "Get Smart") {    
            correct++;
    }
    else {
        incorrect++;
        break;
    }

    $('number-correct').text(correct);
    $('number-incorrect').text(incorrect);

}

