// Variables from HTML //

const startButton = document.querySelectorAll('#start');
let timerDisplay = document.querySelectorAll('#timer');
let questionDisplay = document.querySelectorAll('#questions');
let answerOptions = document.querySelectorAll('#options');
let scoreDislay = document.querySelectorAll('#score');



// Quiz questions //

const quizQuestions = [
    { 
        question: 'Question 1',
        answers: ['x', 'y', 'z'],
        correctAnswer: 'b'
    },

    { 
        question: 'Question 2',
        answers: ['x', 'y', 'z'],
        correctAnswer: 'b'
    },

    { 
        question: 'Question 1',
        answers: ['x', 'y', 'z'],
        correctAnswer: 'b'
    },

    { 
        question: 'Question 1',
        answers: ['x', 'y', 'z'],
        correctAnswer: 'b'
    },

    { 
        question: 'Question 1',
        answers: ['x', 'y', 'z'],
        correctAnswer: 'b'
    },

    { 
        question: 'Question 1',
        answers: ['x', 'y', 'z'],
        correctAnswer: 'b'
    },

    { 
        question: 'Question 1',
        answers: ['x', 'y', 'z'],
        correctAnswer: 'b'
    },

];

// Starters //
let questionsAnswered = 0;
let timeRemaining = 60;
let score = 0;
let count = quizQuestions[questionsAnswered];

// Start Button (and starting the timer) //
$(startButton).click(function() {
    $(startButton).attr('style', 'display: none');
    runQuiz(0);
    timer();
});

// Timer //
function timer() {
    var timeInterval = setInterval(function(){
        timerDisplay.innerHTML = 'You have ' + timeRemaining + ' seconds left.';
        timeRemaining--;

        if(questionsAnswered === quizQuestions.length || timeRemaining === 0){
            timerDisplay.innerHTML = '';
            clearInterval(timeInterval);
            quizComplete();
        }
    }, 1000);
}

// Answering the questions //
$("#options").click(function(event){
    var selected = event.target;
    console.log(selected);

    if(selected.matches('button')){
        if($(selected).text(count.correct)){
            score+=2;
        }
        else{
            timeRemaining -=10;
        }
    }
    questionsAnswered++;
    runQuiz(questionsAnswered);

    console.log(score);

    $(questionDisplay).html('');
    $(answerOptions).html('');
    
});


// Displaying each question //
function displayQuestions(questionsAnswered){
    let questionAsked = $("<h3>");
    $("#questions").append(questionAsked);
    $(questionAsked).text(count);

    for(var i = 0; i < count.length ; i++){
        let choiceButton = $("<button>");
        $('#options').append(choiceButton);
        $(choiceButton).text(count.l[i]);
    }
}

// Run the quiz //
function runQuiz (questionsAnswered) {
    if (questionsAnswered === quizQuestions.length){
        return quizComplete ();
    }
    else {
        return displayQuestions();
    }
}

function quizComplete(){
    var finalScore = $("<h1>").text('Bravo! You scored ' + score + 'out of 10 correctly.');
    $(questionDisplay).append(finalScore);

    var addInitials = $("<h2>");
    $(addInitials).attr('letters' , 'addIntials').text('Please enter your intials here to log your score.');
    var typeInitials = $('<input>');
    $(typeInitials).attr('type' , 'text').attr('letters' , 'initials');
    var showScore = $('button');
    $(showScore).attr('type', 'submit').attr('letters', 'finalScore').text('Done');
    
    $(questionDisplay).append(addIntials, typeInitials, showScore);

    $(showScore).click(function(){
        $(questionDisplay).remove(addInitials, typeInitials, showScore);
        var myScores = $("<h2>");
        $(myScores).attr('letters', 'myScores').text('Scores for Today');
        $(questionDisplay).append(myScores);

        var scoresToday = $("<div>");
        $(scoresToday).attr('letters', 'scoresToday');
        $(scoreDislay).append(scoresToday);


    })
 
}





