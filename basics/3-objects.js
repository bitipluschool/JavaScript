// פרק 3 - אובייקט
// סוגריים מסולסלות יוצרות אובייקט

let person = {
  name: "אוראל חסיד", // Key: Value (Property)
  age: 23,
};

// קריאה וכתיבה מהאובייקט

// 1. Dot Notation
person.age = 16; // שינוי הערך

// 2. Bracket Notation - Dynamic Access
let option = "גיל";
person[option]; // שווה ל person['age']

console.log(person);
