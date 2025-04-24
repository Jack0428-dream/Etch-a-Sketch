const container = document.querySelector("#container");

const btn = document.querySelector("button");
const body = document.querySelector("body");
btn.textContent = "Choose your grid size"
btn.setAttribute("style", "max-width:300px", "max-height:150px")

// btn.addEventListener("click", () => {

// });

for (let i=0; i < 256; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "grid");
    
    container.appendChild(div);
}

const grids = document.querySelectorAll(".grid");
grids.forEach((grid) => {
    grid.addEventListener("mouseenter", () => {
        grid.style["background-color"] = "blue";
    });
})



