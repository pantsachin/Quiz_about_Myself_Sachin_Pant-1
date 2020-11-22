var readlineSync = require("readline-sync");
const chalk = require("chalk");

console.log("Welcome to the quiz - How well do you know Sachin Pant? \n");

var userName = readlineSync.question("May I have your name please? \n");

var acceptance = readlineSync.question("\nAre you ready to take the quiz? \n");

score=0
function Quiz(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer == answer) {
    score = score + 1;
    console.log("Correct Answer, You seem to know him well. ");
    console.log("Your current score is: " + score);
    console.log("_______________________________\n");

  }
  else {
    score = score - 1;
    console.log("Wrong answer, please take him out on a coffee and get to know him more. ");
    console.log("Your current score is: " + score);
    console.log("_______________________________\n");
  }

}

var questionOne = {question:"\nWhich college was Sachin in? " , answer: "DTU" };
var questionTwo = {question:"What sport does Sachin play? " , answer:"Cricket"};
var questionThree = {question:"What engineering Sachin has done? " , answer: "Mechanical" };
var questionFour = {question: "Who is Sachin's favorite sportsperson " , answer: "Rafael Nadal"};
var questionFive = {question: "What was the name of Sachin's dog? " , answer: "Appie" };

var arrayOfQuestions = [questionOne, questionTwo, questionThree, questionFour, questionFive ];

for(var i=0; i<arrayOfQuestions.length; i=i+1){
  var currentQuestion = arrayOfQuestions[i];
  Quiz(currentQuestion.question, currentQuestion.answer)
}

console.log("\nYou scored " + score + " out of 5.");