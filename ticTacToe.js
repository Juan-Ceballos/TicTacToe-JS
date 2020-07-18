document.body.style.backgroundColor = "#12cad6";

// setup game
// board, player turn, win conditions, is game over?,
let board = document.getElementById("brd");

let boardArr = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let playerTurn = 0;
function handleCellClick(clickedCellEvent) {
  console.log("hellos");
  const clickedCell = clickedCellEvent.target;

  const clickedCellIndex = parseInt(
    clickedCell.getAttribute("data-cell-index")
  );

  console.log(clickedCell);
  console.log(clickedCellIndex);
}

// addEventListener, .addTarget(swift)
// querySA returns node list, node list collection of elements
// node list is not an array but can iterate like array using forEach
document
  .querySelectorAll(".cell")
  .forEach((cell) => cell.addEventListener("click", handleCellClick));
//---------------------------------------------------------------
//boardCell.style.lineHeight = "150px";

// sample for loop for going through divs
// for (let i = 0; i <= board.children.length - 1; i++) {
//   let br = board.children[i].children;
//   for (let j = 0; j <= br.length - 1; j++) {
//     console.log(j);
//   }
//   console.log(i);
// }
