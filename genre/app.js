"use strict";

//the button valid
let button = document.getElementById("button");
//the answer
let good = document.getElementById("after_submit");
let text = document.getElementById("number_correct");
let message = document.getElementById("message");
function valid() {
  //the questions
  let one = document.quizz.question1.value;
  let two = document.quizz.question2.value;
  let three = document.quizz.question3.value;
  let four = document.quizz.question4.value;
  let five = document.quizz.question5.value;
  let six = document.quizz.question6.value;
  let seven = document.quizz.question7.value;
  let eight = document.quizz.question8.value;
  let nine = document.quizz.question9.value;
  //the correct answers
  let correct = 0;
  //if the user have the good answers
  if (one == "russa") {
    correct++;
  }
  if (two == "homem") {
    correct++;
  }
  if (three == "filha") {
    correct++;
  }
  if(four == "brasileira") {
    correct++;
  }
  if(five == "alema") {
    correct++;
  }
  if(six == "português") {
    correct++;
  }
  if(seven == "gata") {
    correct++;
  }
  if(eight == "ator") {
    correct++;
  }
  if(nine == "chinesa") {
    correct++;
  }
  //display the number of correct answers
  console.log(correct);

  //array of messages to affect it according to the number of correct answer
  let sms = ["Bien joué!", "C'est bien", "Tu aurais pu faire mieux."]
  //display the message according to the number of good answers
  let score;

  if (correct < 1) {
    score = 2;
  } else if (correct > 0 && correct < 3) {
    score = 1;
  } else {
    score = 0;
  }

  //show me the answers when it's good
  good.style.visibility = "visible";

  //now display the good answer
  message.innerHTML = sms[score];
  //write in the paragraph
  text.innerHTML = "Tu as " + correct + " bonnes réponses";
}
button.addEventListener("click", valid, false);
