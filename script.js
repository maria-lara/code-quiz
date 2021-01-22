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


// Start Button //

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





function createQuiz(questions, questionDisplay, scoreDislay, submitButton){
    
    //  Displaying each question //
    function displayQuestions(questions,questionDisplay){
        const output = [];
        const answers;

        for(var i = 0; i<questions.length; i++){
            answers=[];
            for(letter in questions[i].answers){
                answers.push('<label>'
                    + '<input type="radio" name="question'+i+'value="'+letter+'">'
                    + letter + ':'
                    +questions[i].answers[letter]
                    + '</label>'
                );

            }

        output.push(
            'div class="question">' + quetsions[i].quetsions + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
    
        questionDisplay.innerHTML = output.join('')
    }

    // Displaying the score //
    function displayScore(questions, questionDisplay, scoreDisplay){
        const selectedAnswers = questionDisplay.querySelectorAll('.answers');

        const currentScore = 0;
        const applicantAnswers = '';

        for(var i=0; i<questions.length; i++){
            applicantAnswers = (scoreDislay[i].querySelector('input[name=question'+i+']:checked')||{}).value;

            if(applicantAnswers === questions[i].correctAnswer){
                currentScore++;
            }
        
        
        scoreDislay.innerHTML = currentScore + ' / ' + questions.length;
    }



    // Display final results //
    displayQuestions(questions, scoreDisplay);

    submitButton.onclick = function(){
        displayScore(questions, questionDisplay, scoreDisplay);
    }

    // Event listener to display results on click //

    submitButton.addEventListener('click', displayscore);
}

}

createQuiz(quizQuestions, questionDisplay, scoreDisplay, submitButton);


