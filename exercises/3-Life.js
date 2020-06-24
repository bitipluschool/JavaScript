// let grid;
// let cols = 5;
// let rows = 5;

// function make2DArray(cols, rows) {
//   let arr = new Array(cols);
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = new Array(rows);
//   }
//   return arr;
// }

// function setup() {
//   grid = make2DArray(cols, rows);
//   for (let i = 0; i < cols; i++) {
//     for (let j = 0; j < rows; j++) {
//       grid[i][j] = Math.round(Math.random());
//     }
//   }
//   draw();
// }

// function draw() {
//   for (let i = 0; i < cols; i++) {
//     for (let j = 0; j < rows; j++) {
//       let x = i;
//       let y = j;
//       if (grid[i][j] == 1) {
//         console.log(i);
//       }
//     }
//   }

//   let next = make2DArray(cols, rows);

//   // Compute next based on grid
//   for (let i = 0; i < cols; i++) {
//     for (let j = 0; j < rows; j++) {
//       let state = grid[i][j];
//       // Count live neighbors!
//       let sum = 0;
//       let neighbors = countNeighbors(grid, i, j);

//       if (state == 0 && neighbors == 3) {
//         next[i][j] = 1;
//       } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
//         next[i][j] = 0;
//       } else {
//         next[i][j] = state;
//       }
//     }
//   }

//   grid = next;
// }

// function countNeighbors(grid, x, y) {
//   let sum = 0;
//   for (let i = -1; i < 2; i++) {
//     for (let j = -1; j < 2; j++) {
//       let col = (x + i + cols) % cols;
//       let row = (y + j + rows) % rows;
//       sum += grid[col][row];
//     }
//   }
//   sum -= grid[x][y];
//   return sum;
// }

// setup();

let table;
let cols = 5;
let rows = 5;

function makeTable(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function setup() {
  table = makeTable(cols, rows);
  for (let row = 0; row < cols; row++) {
    for (let col = 0; col < rows; col++) {
      table[row][col] = Math.round(Math.random());
    }
  }
  console.table(table);
  // draw();
}

setup();
