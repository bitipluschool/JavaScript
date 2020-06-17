// Switch statement
/**
 * Syntax
switch (expression) {
    case value1:
        action
    break;
    case value2:
        action
    break;
    default:
}
* How it works?
if expression === value1 do ...
if expression === value2 do ...
 */
let day = new Date().getDay();
switch (day) {
  case 0:
    day = "ראשון";
    break;
  case 1:
    day = "שני";
    break;
  case 2:
    day = "שלישי";
    break;
  case 3:
    day = "רביעי";
    break;
  case 4:
    day = "חמישי";
    break;
  case 5:
    day = "שישי";
    break;
  case 6:
    day = "שבת";
  default:
    console.error("Something wrong. day is invalid");
}
console.log("היום יום " + day);
