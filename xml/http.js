const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200)
    document.getElementById("usersContainer").innerHTML = this.responseText;
};

xhttp.open("GET", "http://localhost:4000/users", true);
xhttp.send();
