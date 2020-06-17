function getAsteriks(rows) {
  // First Rows - UP
  for (let row = 1; row <= rows; row++) {
    let output = [];
    for (let col = 1; col <= row; col++) {
      output.push("*");
    }
    console.log(output.join(" "));
  }
}

getAsteriks(5);

/**
 * 
 *   // SECOND Rows - DOWN
  for (let row = rows; row > 0; row--) {
    output = [];
    for (let col = row - 1; col > 0; col--) output.push("*");
    console.log(output.join(" "));
  }
 */
