//create all global variables
var mainContent = document.querySelector("#main-content");

// Questions Array
var questions = [
    {
        question: 'Question One', 
        optionOne: 'Answer 1A',
        optionTwo: 'Answer 1B',
        optionThree: 'Answer1C',
        optionFour: 'Answer1D',
        Answer: 1
    },
    {
        question: 'Question Two', 
        optionOne: 'Answer 2A',
        optionTwo: 'Answer 2B',
        optionThree: 'Answer2C',
        optionFour: 'Answer2D',
        Answer: 3
    },
    {
        question: 'Question Three', 
        optionOne: 'Answer 3A',
        optionTwo: 'Answer 3B',
        optionThree: 'Answer3C',
        optionFour: 'Answer3D',
        Answer: 2
    },
    {
        question: 'Question Four', 
        optionOne: 'Answer 4A',
        optionTwo: 'Answer 4B',
        optionThree: 'Answer4C',
        optionFour: 'Answer4D',
        Answer: 4
    },
    {
        question: 'Question Five', 
        optionOne: 'Answer 5A',
        optionTwo: 'Answer 5B',
        optionThree: 'Answer5C',
        optionFour: 'Answer5D',
        Answer: 5
    }
];

var counter = 0;
var startButton = document.querySelector("#startBtn");

var startQuiz = function() {
    document.querySelector(".welcome-content").remove();
    mainTest();
};

var mainTest = function() {

    function clearBox() {
        document.getElementById('main-content').innerHTML = ""
    }

    clearBox()

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

    quizButton = document.querySelectorAll("#quizButton")
    console.log(quizButton)
    quizButton.forEach((btn, i) => {
        btn.addEventListener("click", function() {
            checkResult(i, questions[counter].Answer)
        });
    });
};
var checkResult = function(i, correctAnswer) {
    console.log(i)
    console.log(correctAnswer)
    if(i + 1 === correctAnswer) {
        alert('Correct')
    }
    counter++
    mainTest()
}

startButton.addEventListener ("click", startQuiz);
