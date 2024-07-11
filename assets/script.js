btn1.addEventListener("click", function () {
  btn1.disabled = true;
  if (playerState === "X") {
    btn1.innerHTML = "X";
    b1 = "X";
    playerState = "O";
  } else if (playerState === "O") {
    btn1.innerHTML = "O";
    btn1.style.color = "red";
    b1 = "O";
    playerState = "X";
  }

  checkWinner();
});

btn2.addEventListener("click", function () {
  btn2.disabled = true;
  if (playerState === "X") {
    btn2.innerHTML = "X";
    b2 = "X";
    playerState = "O";
  } else if (playerState === "O") {
    btn2.innerHTML = "O";
    btn2.style.color = "red";
    b2 = "O";
    playerState = "X";
  }

  checkWinner();
});

btn3.addEventListener("click", function () {
  btn3.disabled = true;
  if (playerState === "X") {
    btn3.innerHTML = "X";
    b3 = "X";
    playerState = "O";
  } else if (playerState === "O") {
    btn3.innerHTML = "O";
    btn3.style.color = "red";
    b3 = "O";
    playerState = "X";
  }

  checkWinner();
});

btn4.addEventListener("click", function () {
  btn4.disabled = true;

  if (playerState === "X") {
    btn4.innerHTML = "X";
    b4 = "X";
    playerState = "O";
  } else if (playerState === "O") {
    btn4.innerHTML = "O";
    btn4.style.color = "red";
    b4 = "O";
    playerState = "X";
  }

  checkWinner();
});

btn5.addEventListener("click", function () {
  btn5.disabled = true;
  if (playerState === "X") {
    btn5.innerHTML = "X";
    b5 = "X";
    playerState = "O";
  } else if (playerState === "O") {
    btn5.innerHTML = "O";
    btn5.style.color = "red";
    b5 = "O";
    playerState = "X";
  }

  checkWinner();
});

btn6.addEventListener("click", function () {
  btn6.disabled = true;
  if (playerState === "X") {
    btn6.innerHTML = "X";
    b6 = "X";
    playerState = "O";
  } else if (playerState === "O") {
    btn6.innerHTML = "O";
    btn6.style.color = "red";
    b6 = "O";
    playerState = "X";
  }

  checkWinner();
});

btn7.addEventListener("click", function () {
  btn7.disabled = true;
  if (playerState === "X") {
    btn7.innerHTML = "X";
    b7 = "X";
    playerState = "O";
  } else if (playerState === "O") {
    btn7.innerHTML = "O";
    btn7.style.color = "red";
    b7 = "O";
    playerState = "X";
  }

  checkWinner();
});

btn8.addEventListener("click", function () {
  btn8.disabled = true;
  if (playerState === "X") {
    btn8.innerHTML = "X";
    b8 = "X";
    playerState = "O";
  } else if (playerState === "O") {
    btn8.innerHTML = "O";
    btn8.style.color = "red";
    b8 = "O";
    playerState = "X";
  }

  checkWinner();
});

btn9.addEventListener("click", function () {
  btn9.disabled = true;
  if (playerState === "X") {
    btn9.innerHTML = "X";
    b9 = "X";
    playerState = "O";
  } else if (playerState === "O") {
    btn9.innerHTML = "O";
    btn9.style.color = "red";
    b9 = "O";

    playerState = "X";
  }

  checkWinner();
});

function checkWinner() {
  if (b1 === b2 && b2 === b3 && b1 === b3 && b1 && b2 && b3) {
    ScoreCalc(b1);
    console.log("1ci check");
  } else if (b4 === b5 && b5 === b6 && b4 === b6 && b4 && b5 && b6) {
    ScoreCalc(b4);
    console.log("2ci check");
  } else if (b7 === b8 && b8 === b9 && b7 === b9 && b7 && b8 && b9) {
    ScoreCalc(b7);
    console.log("3ci check");
  } else if (b1 === b4 && b4 === b7 && b1 == b7 && b1 && b4 && b7) {
    ScoreCalc(b1);
    console.log("4ci check");
  } else if (b2 === b5 && b5 === b8 && b2 === b8 && b2 && b5 && b8) {
    ScoreCalc(b2);
    console.log("5ci check");
  } else if (b3 === b6 && b6 === b9 && b3 === b9 && b3 && b6 && b9) {
    ScoreCalc(b3);
    console.log("6ci check");
  } else if (b1 === b5 && b5 === b9 && b1 === b9 && b1 && b5 && b9) {
    ScoreCalc(b1);
    console.log("7ci check");
  } else if (b3 === b5 && b5 === b7 && b3 === b7 && b3 && b5 && b7) {
    ScoreCalc(b3);
    console.log("8ci check");
  } else if (b1 && b2 && b3 && b4 && b5 && b6 && b7 && b8 && b9) {
    ScoreCalc('draw');
//   } else if (b2 === b4 && b4 === b6 && b2 === b6 && b2 && b4 && b6) {
//     ScoreCalc(b2);
//     console.log("9ci check");
//     console.log("sert odenildi");
  }
}

function ScoreCalc(player) {
  console.log(player);
  if (player === "X") {
    playerXScore++;
    xScoreText.innerHTML = `X:${playerXScore}`;
    
  } else if (player === "O") {
    playerOScore++;
    oScoreText.innerHTML = `O:${playerOScore}`;
  }

  ShowWinnerMessage(player);

  stopGame();
}

function stopGame() {
  for (let i = 0; i < allbtns.length; i++) {
    allbtns[i].disabled = true;

  }
}

function resetGame() {
  for (let i = 0; i < allbtns.length; i++) {
    allbtns[i].innerHTML = "";
    allbtns[i].disabled = false;
    allbtns[i].style.color = "#3f2b96";
  }

  playerState = "X";
  b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = "";

  hideWinnerMessage();
}


function ShowWinnerMessage(player) { 
    winnerMessageText.style.display = "block";
    winnerMessageText.innerHTML = `Winner is ${player}`
    winnerMessageText.style.color = player === "X" ? "blue" : "red";
    setTimeout(() => {
        winnerMessageText.style.transform = "scale(2)";
    },200)
    
}   


function hideWinnerMessage() {
    winnerMessageText.style.display = "none";
    winnerMessageText.style.transform = "scale(3)";
}
              
