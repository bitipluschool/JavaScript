console.log("Ex 59 Solution!!!");


function playBingo() {
  var isVictory = false;
  while (!isVictory) {
    var gPlayers = createPlayers(2);
    console.log("calledNum", calledNum);
    console.log("gPlayers", gPlayers);
    for (var i = 0; !isVictory && i < gPlayers.length; i++) {
      var calledNum = drawNum();
      var player = gPlayers[i];
      markBoard(player, calledNum);
      isVictory = checkBingo(player);
    }
  }
  console.log("BINGO!");
}

var gPlayers = createPlayers(2);
let isVictory = false;
while (!isVictory) {
  for (let i = 0; i < 60; i++) {
    checkBingo(gPlayers[0]);
    var calledNum = drawNum();
    var markedBoard10 = markBoard(gPlayers[0], calledNum);
    isVictory = true;
  }
}
console.log("Markedboard10 ", markedBoard10);
console.log("Player 1 ", gPlayers[0]);

function markBoard(player, calledNum) {

  for (var i = 0; i < player.board.length; i++) {
    for (var j = 0; j < player.board[i].length; j++) {
      if (player.board[i][j].number === calledNum) {
        player.board[i][j].isHit = true;
        player.board[i][j].number = "V";
        player.hitCounts += 1;
      }
    }
  }
  return player;
}


function checkBingo(player) {
  var counter = 0;
  for (var i = 0; i < player.board.length; i++) {
    for (var j = 0; j < player.board[i].length; j++) {
      if (player.board[i][j].number === "V") {
        counter++;
      }
    }
  }
  console.log("Counter", counter);


  if (counter === 25) return true;

}


function resetNums() {
  var nums = [];
  for (var i = 1; i <= 25; i++) {
    nums.push(i);
  }
  return nums;
}

function drawNum() {
  var randomNum = Math.floor(Math.random() * 25) + 1;
  return randomNum;
}



function createPlayers(numOfPlayers) {
  var gPlayers = [];
  var player = {};
  for (var i = 0; i < numOfPlayers; i++) {
    var name = "prompt";
    player.name = name;
    player.hitCounts = 0;
    player.board = createBingoBoard();
    gPlayers.push(player);
    player = {};
  }
  return gPlayers;
}


function createBingoBoard() {
  var board = [];
  var boardRow = [];

  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      var numCell = {
        number: 0,
        isHit: false,
      };
      numCell.number = getRandomInt(1, 25);
      boardRow.push(numCell);
    }

    board.push(boardRow);
    boardRow = [];
  }
  return board;




function printBingoBoard(gPlayers) {
  for (var player = 0; player < gPlayers.length; player++) {
    for (var i = 0; i < gPlayers[player].board.length; i++) {
      for (var j = 0; j < gPlayers[player].board[i].length; j++) {
        if (gPlayers[player].board[i][j].isHit) {
          gPlayers[player].board[i][j].number = "V";
        }
      }
    }
  }
  return gPlayers;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
