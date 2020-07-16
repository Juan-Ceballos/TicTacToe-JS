document.body.style.backgroundColor = "#12cad6";

let board = document.getElementById("brd");
let boardRow = board.children[0];
let boardCell = boardRow.children[0];

// set up on click on click event

boardCell.style.backgroundColor = "red";
// board.onclick = function () {
//   boardCell.style.backgroundColor = "yellow";
// };
boardRow.onclick = function () {
  boardCell.style.backgroundColor = "yellow";
};
