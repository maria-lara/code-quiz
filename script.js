// Variables from HTML //

const startButton = document.querySelectorAll('#start');
const timerDisplay = document.querySelectorAll('#timer');
const questionDisplay = document.querySelectorAll('#questions');
const answerOptions = document.querySelectorAll('#options');
const scoreDislay = document.querySelectorAll('#score');

// Starters //
let questionsAnswered = 0;
let timeRemaining = 60;
let score = 0;
let correctAnswer;


// Start Button (and starting the timer) //
$("#start").click(function() {
    $("#start").attr("style", "display: none");
    showQuestion(0);
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


// Displaying each question //

function displayQuestions(questionsAnswered){
    let questionAsked = $("<h3>");
    $("#questions").append(questionAsked);
    $(questionAsked).text(quizQuestions[questionsAnswered].j);

    for(var i = 0; i < quizQuestions[questionsAnswered].length ; i++){
        let choiceButton = $("<button>");
        $('#options').append(choiceButton);
        $(choiceButton).text(quizQuestions[questionsAnswered].l[i]);
    }
}

function runQuiz (questionsAnswered) {
    if (questionsAnswered === quizQuestions.length){
        return quizComplete ();
    }
    else {
        return displayQuestions();
    }
}





