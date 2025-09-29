let boxes = document.querySelectorAll(".Box");
let resetbutton = document.querySelector("#reset");
resetbutton.addEventListener("click", () => {
  for (let Box of boxes) {
    Box.disabled = false;
    Box.innerText = "";
  }
  message.classList.add("hide");
  turnO = true;
});
let gameBtn = document.querySelector(".newgame");
gameBtn.addEventListener("click", () => {
  resetbutton.click();
});
let msg = document.querySelector(".msg");
let message = document.querySelector(".message");

let  turnO = true;
const winpaterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
boxes.forEach((Box) => {
  Box.addEventListener("click",()=> {
      if(turnO){
        Box.innerHTML = '<span class="O">O</span>';
        turnO = false;
      }else{
        Box.innerHTML = 'x';
        turnO= true;
      }
      Box.disabled=true;
      checkWinner ();
          
  });
});

const disabled=()=>{
  for (let Box of boxes) {
    Box.disabled = false;
    Box.innerHTML = "";
  }}
const showWinner = (winner) => {
  msg.innerText = `Congratulations! Winner is ${winner}`;
  message.classList.remove("hide");
  disabled();
}

const showDraw = () => {
  msg.innerText = "It's a Draw!";
  message.classList.remove("hide");
};

const checkWinner = () => {
  let winnerFound = false;
  for (let pattern of winpaterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("Winner ! =", pos1Val);
        showWinner(pos1Val);
        winnerFound = true;
        break;
      }
    }
  }
  // If all boxes are filled and no winner
  if (!winnerFound) {
    let filled = true;
    for (let Box of boxes) {
      if (Box.innerText === "") {
        filled = false;
        break;
      }
    }
    if (filled) {
      showDraw();
      disabled();
    }
  }
};

  newgame.addEventListener("click",resetbutton);
  