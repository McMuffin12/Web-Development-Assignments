let button = document.getElementById("changeTextBtn");

button.addEventListener("click", function() {
    // document.getElementById("title").textContent = "DOM is Working!";
    
    // We can also store the element in a variable and then change the text content
    let heading = document.getElementById("title");
    
    heading.textContent = "DOM is Working!";
    heading.style.color = "blue";
    heading.style.backgroundColor = "lightyellow";

    // let background = document.querySelector("body");
    // background.style.backgroundColor = "lightblue";
    document.body.style.backgroundColor = "lightblue";
});

let toggleButton = document.getElementById("toggleDescriptionBtn");

toggleButton.addEventListener("click", function() {
    let description = document.getElementById("description");
});