let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let start = false;
let level = 0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
  if (start == false) {
    console.log("Game is started");
    start = true;

    levelUp();
  }
});

function btnFlush(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlush(btn) {
  btn.classList.add("userFlush");
  setTimeout(function () {
    btn.classList.remove("userFlush");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  btnFlush(randBtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game over! Your score is ${level} </br>press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

function btnPress() {
  let btn = this;
  console.log(this);
  btnFlush(btn);

  userColor = btn.getAttribute("id");
  console.log(userColor);
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  start = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
