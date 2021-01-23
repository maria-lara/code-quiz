// Variables from HTML //

const startButton = document.querySelector('#start');
let timerDisplay = document.querySelector('#timer');
let questionDisplay = document.querySelector('#questions');
let answerOptions = document.querySelector('#options');
let scoreDislay = document.querySelector('#score');



// Quiz questions //

const quizQuestions = [
    { 
        question: 'Question 1',
        answers: ['x', 'y', 'z'],
        correctAnswer: 1
    },

    { 
        question: 'Question 2',
        answers: ['x', 'y', 'z'],
        correctAnswer: 0
    },

    { 
        question: 'Question 3',
        answers: ['x', 'y', 'z'],
        correctAnswer: 1
    },

    { 
        question: 'Question 4',
        answers: ['x', 'y', 'z'],
        correctAnswer: 2
    },

    { 
        question: 'Question 5',
        answers: ['x', 'y', 'z'],
        correctAnswer: 0
    },

    { 
        question: 'Question 6',
        answers: ['x', 'y', 'z'],
        correctAnswer: 1
    },

    { 
        question: 'Question 7',
        answers: ['x', 'y', 'z'],
        correctAnswer: 2
    },

];

// Starters //
let questionsAnswered = 0;
let timeRemaining = 60;
let score = 0;


// Start Button (and starting the timer) //
$(startButton).click(function() {
    $(startButton).attr('style', 'display: none');
    runQuiz(0);
    timer();
});

// Timer //
function timer() {
    var timeInterval = setInterval(function(){
        console.log(timerDisplay);
        timerDisplay.innerHTML = 'You have ' + timeRemaining + ' seconds left.';
        timeRemaining--;

        if(questionsAnswered === quizQuestions.length || timeRemaining === 0){
            timerDisplay.innerHTML = '';
            clearInterval(timeInterval);
            quizComplete();
        }
    }, 1000);
}
// Displaying each question //
function displayQuestions(){
    let header = $("<h3>");
    $(questionDisplay).append(header);
    $(header).text(quizQuestions[questionsAnswered].question);
    for(var i = 0; i < quizQuestions[questionsAnswered].answers.length ; i++){

        let choiceButton = $("<button>");
        $('#options').append(choiceButton);
        $(choiceButton).text(quizQuestions[questionsAnswered].answers[i]).attr('data-value', i);
    }
}

// Answering the questions //

$("#options").click(function(event){
    
    var buttonClicked = $(event.target);
    var answer = buttonClicked.data('value');
        if (answer === quizQuestions[questionsAnswered].correctAnswer){
            score+=2;
        }

    questionsAnswered++;
    $(questionDisplay).html('');
    $(answerOptions).html('');
    //console.log(score);
    runQuiz();

});


// Run the quiz //
function runQuiz () {
    console.log(questionsAnswered);
    if (questionsAnswered < quizQuestions.length){
        return displayQuestions();
    }
}

//Final page when
function quizComplete(){
    var finalScore = $("<h1>").text('Bravo! You scored ' + score + ' out of 10 correctly.');
    
    $(questionDisplay).append(finalScore);

    var addInitials = $("<h2>");
    $(addInitials).attr('letters' , 'addInitials').text('Please enter your intials here to log your score.');
    var typeInitials = $('<input>');
    $(typeInitials).attr('type' , 'text').attr('letters' , 'initials');
    var showScore = $("<button>");
    $(showScore).attr('type', 'submit').attr('letters', 'finalScore').text('Done');
    
    $(questionDisplay).append(addInitials, typeInitials, showScore);

    $(showScore).click(function(){
        $(questionDisplay).remove(addInitials, typeInitials, showScore);
        var myScores = $("<h2>");
        $(myScores).attr('letters', 'myScores').text('Scores for Today');
        $(questionDisplay).append(myScores);

        var scoresToday = $("<div>");
        $(scoresToday).attr('letters', 'scoresToday');
        $(scoreDislay).append(scoresToday);

        var finalScreen = (typeInitials.value , score);
        console.log(finalScreen);
        const theJSON = JSON.stringify(finalScreen);
        document.getElementById("scoresToday").innerHTML = theJSON;
        

    })
 
}





