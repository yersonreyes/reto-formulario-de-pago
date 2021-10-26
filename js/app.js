let option = document.querySelectorAll(".variant");
let content = document.getElementById("content");
let button = document.getElementById("button");

option.forEach((element) => {
  element.classList.add("grey");
});

function remove() {
  option.forEach((element) => {
    element.classList.remove("grey");
    button.classList.remove("opacity");
  });
}

content.addEventListener("click", remove);
