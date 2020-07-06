// JavaScript file

function createButton1(label, onclick) {
  const body = document.body;
  const btn = document.createElement("button");
  btn.innerHTML = label;
  btn.addEventListener("click", onclick);
  body.appendChild(btn);
}

createButton1("Print");
