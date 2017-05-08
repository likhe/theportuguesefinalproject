"use strict";

//the button valid
let button = document.getElementById("button");
//the answer
let good = document.getElementById("after_submit");
let text = document.getElementById("number_correct");
function valid() {
  //the questions
  let one = document.quizz.question1.value ;
  let two = document.quizz.question2.value ;
  let three = document.quizz.question3.value ;
  //the correct answers
  let correct = 0;
  //if the user have the good answers
if (one=="Linda") {
  correct = correct + 1;
}
if (two=="female") {
  correct = correct + 1;
}
if (three=="marseille") {
  correct = correct + 1;
}
console.log(correct);
  //show me the answers when it's good
  good.style.visibility = "visible";
  //write in the paragraph
  text.innerHTML = "Tu as " + correct + " bonnes réponses";


}
button.addEventListener("click", valid, false);
