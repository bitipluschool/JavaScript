let i = 0;

// Continue Example
while (i <= 10) {
  if (i % 2 === 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}

// Break Example
// while (i <= 10) {
//   if (i === 5) break;
//   console.log(i);
//   i++;
// }
