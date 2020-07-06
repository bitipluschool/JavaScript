const username = "orelhassid";
const password = "123456";

// validate fields if empty
if (username === "" && password === "") error();
else submitForm();

function error() {
  console.error("username or password is missing");
}

function submitForm() {
  console.log("You're logged in");
}
