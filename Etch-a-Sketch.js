const container = document.querySelector("#container");

const btn = document.querySelector("button");
const body = document.querySelector("body");
btn.textContent = "Choose your grid size"
btn.setAttribute("style", "max-width:300px", "max-height:150px")

for (let i=0; i < 256; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "grid");
    
    container.appendChild(div);
};

btn.addEventListener("click", () => {
    grids.forEach((grid) => {
        container.removeChild(grid);
    });       
    sizeSelection();



});

function sizeSelection () {
    let size = prompt("Write the size of grid you want: (within 100)", "");
    for (let i=0; i < Number(size) * Number(size); i++) {
        const div1 = document.createElement("div");
        container.appendChild(div1);
        div1.setAttribute("class", "newGrid");
    };

    const newGrid = document.querySelectorAll(".newGrid");
    let nSize = (592/size) - 2;
    newGrid.forEach((grid) => {
        grid.setAttribute("style", "border: 1px solid brown; width:"+ nSize+"px;height:" + nSize +"px;");
        grid.addEventListener("mouseenter", () => {
            grid.style["background-color"] = "blue";
        });
    
        grid.addEventListener("click", () => {
            grid.style["background-color"] = null;
        });
    })
             
};



const grids = document.querySelectorAll(".grid");
grids.forEach((grid) => {
    grid.addEventListener("mouseenter", () => {
        grid.style["background-color"] = "blue";
    });
});

grids.forEach((grid) => {
    grid.addEventListener("click", () => {
        grid.style["background-color"] = null;
    });
}); 

