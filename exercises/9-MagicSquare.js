const squaredArray = [
  [2, 4, 2],
  [1, 2, 5],
  [2, 2, 4],
];

function validateSquare(square) {
  let rowBox = [];
  let columnBox = [];
  let diagonalBox = [];

  square.forEach((row, index) => {
    createRowBox(row);
    createColumnBox(row);
  });

  function createRowBox(row) {
    let rowSum = row.reduce((total, value) => (total += value));
    rowBox.push(rowSum);
  }

  function createColumnBox(row) {
    // let rowSum = row.reduce((total, value) => (total += value));
    // columnBox.push(rowSum);
  }

  const rowValidate = rowBox.every((value) => value === rowBox[0]);
  console.log(rowValidate);
}

const result = validateSquare(squaredArray);
// console.log("Final result", result);
