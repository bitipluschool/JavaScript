// const orel = {
//   language: "Hebrew",
//   set lang(lang) {
//     this.language = lang;
//   },
// };
// orel.language = "Hebrew";
// orel.lang = "Hebrew";

const person = {
  name: "Orel Hassid",
  age: 23,
  height: "1.69",
};

let list = document.getElementById("list");
let btn = document.getElementById("btn");
let btnReset = document.getElementById("btn-reset");
let input = document.getElementById("input");
let item = document.createElement("li");

btnReset.addEventListener("click", () => {
  list.innerText = "";
});

btn.addEventListener("click", () => {
  let item = document.createElement("li");
  item.innerText = input.value;
  list.appendChild(item);
  input.value = "";
});

for (let value of Object.entries(person)) {
  let item = document.createElement("li");
  item.innerText = value;
  list.appendChild(item);
}
