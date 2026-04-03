function callAPI() {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    let output = document.getElementById("output");
    output.innerHTML = "";
    data.forEach(user => {
      let p = document.createElement("p");
      p.textContent = user.name + " - " + user.email;
      output.appendChild(p);
    });
  });
}

document.getElementById("getWeather").addEventListener("click", callAPI);