//create all global variables
var mainContent = document.querySelector("#main-content");
//create a start quiz function that will link to a button

//welcome varibales
var welcomeHeading = document.createElement("h1");
var welcomeRules = document.createElement("h3");
var startButton = document.createElement("button")

//styles for variables
welcomeHeading.className = "welcome-heading";
welcomeRules.className = "welcome-rules";
startButton.className = "start-button";

//text-content for welcome items
welcomeHeading.textContent = "Welcome to quiz";
welcomeRules.textContent = "Press start to begin";
startButton.textContent = "Start";


// Append Welcome items
mainContent.appendChild(welcomeHeading);
mainContent.appendChild(welcomeRules);
mainContent.appendChild(startButton);


//seperate each Question numbers in to a array?

//call upon each array whenever one of the answers are clicked

//all multiple choice questions must be buttons

//create a time function that will count down from 60 to 0 and will have an iteration of 1 second

//time function will go down 10 seconds every wrong answer

// time function will stop whenever all questions are answered or when it hits zero

// quiz will end when all multiple choice answered are answered or player runs out of time

//Add an input for player to put their initials and record it in local memeory along side their high score
 
//print out their initials and high score on last page