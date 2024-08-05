let boxes = document.querySelectorAll(".box");
let RestartBtn = document.querySelector(".RestartBtn");
let winMesCon = document.querySelector(".winMeassageContainer");
let turnO = true;
let winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (turnO) {
      e.target.innerText = "O";
      turnO = false;
    } else {
      e.target.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
}, false);

const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log(pos1Val, pos2Val, pos3Val);
        winMesCon.classList.remove('hide');
        winMesCon.innerText = `Winner Team are : ${pos1Val}`;
        boxes.forEach((box)=>{
            box.disabled = true;
        })
      }
    }
    // console.log(pattern[0],pattern[1],pattern[2]);
    // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
  }
};


RestartBtn.addEventListener('click',()=>{
    boxes.forEach((box)=>{
        box.innerText = '';
    })
    winMesCon.classList.add('hide');
    winMesCon.innerText = '';
    turnO = true;
    boxes.forEach((box)=>{
        box.disabled = false;
    })
},false);