const cols = 5;
const rows = 5;

function createTable(cols, rows) {
  let table = new Array(cols);

  for (let i = 0; i < table.length; i++) {
    table[i] = new Array(rows);
  }
  return table;
}

function setCellState(grid, col, row) {
  // Determined state by neighbors
  grid[col][row] = Math.round(Math.random());
  /**
   * grid[1][1] neightbors:
   *
   * grid[2][1] - down
   * grid[0][0] - left up
   * grid[1][0] - left
   * grid[2][0] - left down
   *
   * grid[1][0] - up
   * grid[2][0] - right up
   * grid[1][2] - right
   * grid[2][2] - right down
   */

  // let sum = 0;
  // for (let i = -1; i < 2; i++) {
  //   for (let j = -1; j < 2; j++) {
  //     col = (col + i + cols) % cols;
  //     row = (row + j + rows) % rows;
  //     sum += grid[col][row];
  //   }
  // }
  // sum -= grid[col][row];
  // return sum;
}

function setup() {
  let grid = createTable(cols, rows);

  for (let col = 0; col < cols; col++) {
    // iterate every column
    for (let row = 0; row < rows; row++) {
      // iterate every row
      setCellState(grid, col, row);
    }
  }

  console.table(grid);
}

setup();
