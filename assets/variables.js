// dom elements
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
const btn9 = document.querySelector(".btn9");
const allbtns = document.querySelectorAll(".btnSquare");
// footer dynamic year element
const yearText = document.querySelector(".yearText");
// winner message dom element
const winnerMessageText = document.querySelector(".winnerMessageText");
//  score dom elements
const xScoreText = document.querySelector(".xScore");
const oScoreText = document.querySelector(".oScore");
// variables
let b1, b2, b3, b4, b5, b6, b7, b8, b9;
let playerState = "X";
// score
let playerXScore = 0;
let playerOScore = 0;

// dynamic year text
yearText.innerHTML = new Date().getFullYear()>'2024'? `-${new Date().getFullYear()}`: '';



