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
  console.log("Dom fully loaded and parsed");
});

export const right = () => {
  if (translationComplete === true) {
    translationComplete = false;
    index--;
    if (index == -1) {
      index = amount - 1;
    }
    var outerIndex = index % amount;

    for (let i = 0; i < amount; i++) {
      var img = document.getElementsByClassName("img")[i];
      img.style.opacity = "1";
      img.style.transform = `translate(${currTransl[i] + 200}px)`;

      currTransl[i] = currTransl[i] + 200;
    }
    var outerImg = document.getElementsByClassName("img")[outerIndex];

    outerImg.style.transform =
      "translate(" + (currTransl[outerIndex] - 200 * amount) + "px)";
    outerImg.style.opacity = "0.5";
    currTransl[outerIndex] = currTransl[outerIndex] - 200 * amount;
  }
};
