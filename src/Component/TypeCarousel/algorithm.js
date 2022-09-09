export const right = (
  translationComplete,
  setTrans,
  index,
  setIndex,
  currTransl,
  setCurrent,
  amount
) => {
  if (translationComplete === true) {
    setTrans(false);
    //translationComplete = false;
    setIndex((prev) => prev--);
    console.log(index);
    if (index === -1) {
      setIndex(amount - 1);
    }
    var outerIndex = index % amount;

    for (let i = 0; i < amount; i++) {
      var img = document.getElementsByClassName("img")[i];
      img.style.opacity = "1";
      img.style.transform = `translate(${currTransl[i] + 200}px)`;

      setCurrent((prev) => (prev[i] = prev[i] + 200));
      //currTransl[i] = currTransl[i] + 200;
    }
    console.log(outerIndex);
    var outerImg = document.getElementsByClassName("img")[outerIndex];
    console.log(outerImg);

    outerImg.style.transform =
      "translate(" + (currTransl[outerIndex] - 200 * amount) + "px)";
    outerImg.style.opacity = "0.5";
    setCurrent((prev) => (prev[outerIndex] = prev[outerIndex] - 200 * amount));
    //currTransl[outerIndex] = currTransl[outerIndex] - 200 * amount;
  }
};
export const left = (
  translationComplete,
  setTrans,
  index,
  setIndex,
  currTransl,
  setCurrent,
  amount
) => {
  if (translationComplete === true) {
    setTrans(false);
    //translationComplete = false;
    setIndex((prev) => prev++);

    var outerIndex = (index - 1) % amount;

    for (let i = 0; i < amount; i++) {
      var img = document.getElementsByClassName("img")[i];
      img.style.opacity = "1";
      img.style.transform = `translate(${currTransl[i] - 200}px)`;
      setCurrent((prev) => (prev[i] = prev[i] - 200));
      //currTransl[i] = currTransl[i] - 200;
    }
    var outerImg = document.getElementsByClassName("img")[outerIndex];
    console.log(outerImg);
    outerImg.style.transform =
      "translate(" + (currTransl[outerIndex] + 200 * amount) + "px)";
    outerImg.style.opacity = "0.5";
    setCurrent((prev) => (prev[outerIndex] = prev[outerIndex] + 200 * amount));
    //currTransl[outerIndex] = currTransl[outerIndex] + 200 * amount;
  }
};
