"use strict";

//the button valid
let button = document.getElementById("button");
//the answer
let good = document.getElementById("after_submit");
function valid(e) {
  //show me the answers when it's good
  good.style.visibility = "visible";

}
button.addEventListener("click", valid, false);
