document.body.style.backgroundColor = "#12cad6";

let board = document.getElementById("brd");
let boardRow = board.children[0];
let boardCell = boardRow.children[0];

// let x = document.createElement("div");
// x.style.verticalAlign = "center";
// x.style.textAlign = "center";
// x.innerHTML = "X";
// set up on click on click event

boardCell.style.backgroundColor = "red";
// board.onclick = function () {
//   boardCell.style.backgroundColor = "yellow";
// };
// boardRow.onclick = function () {
//   boardCell.innerHTML = "X";
// };

boardCell.onclick = function () {
  boardCell.innerHTML = "X";
};
