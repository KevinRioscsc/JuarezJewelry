const left = document.getElementById("left");
const right = document.getElementById("right");

console.log(left);

const radioButtons = document.querySelectorAll('input[name="size"]');

left.addEventListener("click", () => {
  console.log("go left");
});

right.addEventListener("click", () => {
  /*
  let checkedBtn;

  radioButtons.forEach((item, index) => {
    if (item.checked === true) {
      console.log(index);
      checkedBtn = index;
    }
  });
  if (checkedBtn === radioButtons.length - 1) {
    return (radioButtons[0].checked = true);
  } else {
    console.log(checkedBtn);
    radioButtons[checkedBtn + 1].checked = true;
  }*/
  console.log("hey");
});
