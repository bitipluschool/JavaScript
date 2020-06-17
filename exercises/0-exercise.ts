// TypeScript file

function createButton(label: string, onclick) {
  const body = document.body;
  const btn = document.createElement("button");
  btn.innerHTML = label;
  btn.addEventListener("click", onclick);
  body.appendChild(btn);
}

createButton("Print", alert("Hi"));
