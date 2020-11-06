//create all global variables
var mainContent = document.querySelector("#main-content");
var timerEl = document.querySelector("#countdown");

// Questions Array
var questions = [
    {
        question: 'This is a quiestion?This is a quiestion?This is a quiestion?This is a quiestion?This is a quiestion?', 
        optionOne: 'Answer 1AAnswer 1AAnswer 1A',
        optionTwo: 'Answer 1Bplaceholderplaceholder',
        optionThree: 'Answer1Cplaceholderplaceholder',
        optionFour: 'Answer1Dplaceholderplaceholder',
        Answer: 1
    },
    {
        question: 'Ques tionTwovp laceho lderplace hold erplaceholder placeholde rplace holderpla ceholderpla ceholder', 
        optionOne: 'placeholderplaceholderplaceholderplaceholder',
        optionTwo: 'Answer 2B placeholderplaceholderplaceholderplaceholder',
        optionThree: 'Answer2Cplaceholderplaceholderplaceholder',
        optionFour: 'Answer2Dplaceholderplaceholder',
        Answer: 3
    },
    {
        question: 'Question Threeplaceholderplaceholderplaceholderplaceholderplaceholderplaceholderplaceholder', 
        optionOne: 'Answer 3Aplaceholderplaceholderplaceholder',
        optionTwo: 'Answer 3Bplaceholderplaceholder',
        optionThree: 'Answer3Cplaceholderplaceholder',
        optionFour: 'Answer3Dplaceholderplaceholder',
        Answer: 2
    },
    {
        question: 'Question Fourplaceholderplaceholderplaceholderplaceholderplaceholderplaceholder', 
        optionOne: 'Answer 4Aplaceholderplaceholder',
        optionTwo: 'Answer 4Bplaceholderplaceholderplaceholder',
        optionThree: 'Answer4Cplaceholderplaceholderplaceholder',
        optionFour: 'Answer4Dplaceholderplaceholderplaceholder',
        Answer: 4
    },
    {
        question: 'Question Fiveplaceholderplaceholderplaceholderplaceholderplaceholderplaceholderplaceholderplaceholder', 
        optionOne: 'Answer 5Aplaceholderplaceholder',
        optionTwo: 'Answer 5Bplaceholderplaceholder',
        optionThree: 'Answer5Cplaceholderplaceholder',
        optionFour: 'Answer5Dplaceholderplaceholderplaceholder',
        Answer: 3
    }
];

var counter = 0;
var startButton = document.querySelector("#startBtn");

var startQuiz = function() {
    countDown();
    document.querySelector(".welcome-content").remove();
    mainTest();
};

var mainTest = function(result) {

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

    if(counter === 0){
        console.log('dont do anything')
    } else {
        var resultDiv = document.createElement('div');
        resultDiv.className = "result-div";
        resultDiv.innerHTML = result;
        mainContent.appendChild(resultDiv);
        console.log(resultDiv);
    }


    quizButton = document.querySelectorAll("#quizButton")
    quizButton.forEach((btn, i) => {
        btn.addEventListener("click", function() {
            checkResult(i, questions[counter].Answer)
        });
    });
};

var checkResult = function(i, correctAnswer) {
    if(i + 1 === correctAnswer) {
        var result = "<h2> Correct! </h2>"
    } else {
        var result = "<h2> Incorrect! </h2>"
        timeLeft = timeLeft - 10;
    }
    counter++
    if (counter < 5){
        mainTest(result)
    } else{
        endTest();
    }
}

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

var endTest = function() {
    function clearBox() {
        document.getElementById('main-content').innerHTML = ""
    }
    clearBox()
}
startButton.addEventListener ("click", startQuiz);
