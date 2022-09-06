var index = 0;
var amount = 0;
var currTransl = [];
var translationComplete = true;

var transitionCompleted = () => {
  translationComplete = true;
};

document.addEventListener("DOMContentLoaded", () => {
  amount = document.getElementsByTagName("img").length;
  for (let i = 0; i < amount; i++) {
    currTransl[i] = -200;
    document
      .getElementsByTagName("img")
      [i].addEventListener("transitionend", transitionCompleted, true);
    document
      .getElementsByTagName("img")
      [i].addEventListener("webkitTransitionEnd", transitionCompleted, true);
    document
      .getElementsByTagName("img")
      [i].addEventListener("oTransitionEnd", transitionCompleted, true);
    document
      .getElementsByTagName("img")
      [i].addEventListener("MSTransitionEnd", transitionCompleted, true);
  }
});
