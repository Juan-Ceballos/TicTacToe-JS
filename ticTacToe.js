document.body.style.backgroundColor = "#12cad6";

let board = document.getElementById("brd");
let boardRow = board.children[0];
let boardCell = boardRow.children[0];

let boardArr = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
// board[0] = [d1, d2, d3]
console.log(board.children.length);
console.log(board.children[0].length); //undefined
console.log(boardRow.length); // also prints undefined

for (let i = 0; i <= board.children.length - 1; i++) {
  let br = board.children[i].children;
  for (let j = 0; j <= br.length - 1; j++) {
    console.log(j);
  }
  console.log(i);
}

boardCell.onclick = function () {
  boardCell.innerHTML = "X";
  boardCell.style.textAlign = "center";
  boardCell.style.lineHeight = "150px";
};

board.onclick = function () {
  boardCell.innerHTML = "O";
  boardCell.style.textAlign = "center";
  boardCell.style.lineHeight = "150px";
};

// 3x3 board
// register click on every cell corresponds appropriately
function boardTurn() {
  // cell id,
}
