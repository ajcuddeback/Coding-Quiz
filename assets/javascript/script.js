//create all global variables
var mainContent = document.querySelector("#main-content");
var formContainer = document.querySelector("#user-input-form")
var timerEl = document.querySelector("#countdown");
highScores = [];
// Questions Array
var questions = [
    {
        question: 'In what year was ES6 created?', 
        optionOne: 'A. 2015',
        optionTwo: 'B. 2014',
        optionThree: 'C. 2016',
        optionFour: 'D. 2017',
        Answer: 1
    },
    {
        question: 'What does the % operand do?', 
        optionOne: 'Finds the percentage of a decimal number',
        optionTwo: 'It does not do anything, this is a trick question',
        optionThree: 'Finds the remainder of the number when we divide the left operand by the right operand',
        optionFour: 'Places a percent sign in front of a number',
        Answer: 3
    },
    {
        question: 'Commonly used datatypes include all but what?', 
        optionOne: 'Booleans',
        optionTwo: 'Alert',
        optionThree: 'Strings',
        optionFour: 'Numbers',
        Answer: 2
    },
    {
        question: 'The contents of a function must be enclosed in which of the following', 
        optionOne: 'Square Brackets',
        optionTwo: 'Quotaion Marks',
        optionThree: 'Parenthisis',
        optionFour: 'Curly Braces',
        Answer: 4
    },
    {
        question: 'Which of the following is the correct way to define a new variable', 
        optionOne: 'variable = newVariable',
        optionTwo: 'variable newVariable = 0',
        optionThree: 'var newVariable = 0',
        optionFour: '0 = newVariable var',
        Answer: 3
    }
];

// Counter for Questions Array
var counter = 0;
//Start Button selector
var startButton = document.querySelector("#startBtn");

//Start Quiz Function
var startQuiz = function() {
    countDown();
    document.querySelector(".welcome-content").remove();
    mainTest();
};

// Main Test Function
var mainTest = function(result) {

    //Clear questions on screen per iteration
    function clearBox() {
        document.getElementById('main-content').innerHTML = ""
    }

    clearBox()

    // Print out questions and choices
    var question = document.createElement("h1");
    question.className = "question-type";
    question.id = "questionType";
    question.textContent = questions[counter].question;
    mainContent.appendChild(question);

    var optionOne = document.createElement("button");
    optionOne.className = "quiz-button btn";
    optionOne.id = "quizButton";
    optionOne.textContent = questions[counter].optionOne;
    mainContent.appendChild(optionOne);

    var optionTwo = document.createElement("button");
    optionTwo.className = "quiz-button btn";
    optionTwo.id = "quizButton";
    optionTwo.textContent = questions[counter].optionTwo;
    mainContent.appendChild(optionTwo);

    var optionThree = document.createElement("button");
    optionThree.className = "quiz-button btn";
    optionThree.id = "quizButton";
    optionThree.textContent = questions[counter].optionThree;
    mainContent.appendChild(optionThree);

    var optionFour = document.createElement("button");
    optionFour.className = "quiz-button btn";
    optionFour.id = "quizButton";
    optionFour.textContent = questions[counter].optionFour;
    mainContent.appendChild(optionFour);

    //Print out the result
    if(counter === 0){
        console.log('dont do anything')
    } else {
        var resultDiv = document.createElement('div');
        resultDiv.className = "result-div";
        resultDiv.innerHTML = result;
        mainContent.appendChild(resultDiv);
        console.log(resultDiv);
    }

    // Fetch the quiz buttons
    quizButtons = document.querySelectorAll("#quizButton")
    quizButtons.forEach((btn, i) => {
        btn.addEventListener("click", function() {
            checkResult(i, questions[counter].Answer)
        });
    });
};

// Check result function
var checkResult = function(i, correctAnswer) {
    if(i + 1 === correctAnswer) {
        var result = "<h2> Correct! </h2>"
    } else {
        var result = "<h2> Incorrect! </h2>"
        timeLeft = timeLeft - 10;
    }
    counter++
    mainTest(result);
}

// Countdown Function
var timeLeft = 60
var countDown = function() {
    var timeInterval = setInterval(function() {
        if (counter < 5 && timeLeft >= 0) {
            timerEl.textContent = "Time left: " + timeLeft;
            timeLeft--
        }
        else {
            clearInterval(timeInterval);
             endTest()
        }
    }, 1000);
};

// End test function
var endTest = function() {

    // Clear the last quesiton
    function clearBox() {
        document.getElementById('main-content').innerHTML = ""
        document.getElementById('highscores-link').innerHTML = ""
    }
    clearBox()

    // Change the timer to score
    timerEl.textContent = "Score: " + timeLeft;

    // Print out the Form
    var inputInstructions = document.createElement('h2');
    inputInstructions.className = "input-instructions";
    inputInstructions.textContent = "Please enter your initials: ";
    formContainer.appendChild(inputInstructions)

    var initialsInput = document.createElement('input');
    initialsInput.className = "initials-input";
    initialsInput.setAttribute('placeholder', 'Initials');
    formContainer.appendChild(initialsInput);

    var initialsSubmit = document.createElement('button');
    initialsSubmit.className = "initials-submit";
    initialsSubmit.textContent = "Submit";
    initialsSubmit.setAttribute('type', 'submit');
    formContainer.appendChild(initialsSubmit);

    // Store form data to local storage
    initialsSubmit.addEventListener("click", function(event) {
        
        
        var initials = initialsInput.value;

        if (!initials) {
            alert("Please enter initials!")
            endTest();
        } else {
            var scoreObject = {
                initials: initials,
                score: timeLeft
            }
            highScores.push(scoreObject);
            console.log(highScores)
        }

        localStorage.setItem('scores', JSON.stringify(highScores));
    })

}

// Start Button
startButton.addEventListener ("click", startQuiz);
