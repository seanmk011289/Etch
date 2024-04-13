let flexContainer = document.querySelector(".flexContainer");
let button = document.querySelector(".createGrid");

let getAGrid = function (num) {
  flexContainer.innerHTML = "";
  for (var i = 0; i < num; i++) {
    flexContainer.innerHTML += `<div class='flex'></div>`;
  }
};

let mxWidthCalc = (num) => {
  let root = Math.sqrt(num);
  let mx = flexContainer.getBoundingClientRect().width / root;
  flexContainer.querySelectorAll(".flex").forEach((div) => {
    div.style.width = `${mx}px`;
    div.style.height = `${mx}px`;
    div.style.flex = `${(root / num) * 100}% 1 1`;
  });
};

let createGrid = function (num) {
  getAGrid(num);
  mxWidthCalc(num);
};

createGrid(64);

button.addEventListener("click", (e) => {
  let newNum = prompt("How many squares per side?");
  // console.log(newNum);
  createGrid(newNum * newNum);
});
