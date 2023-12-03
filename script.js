const singleMode = document.getElementById("singleMode");
const rainbowMode = document.getElementById("rainbow");
const colorChoice = document.getElementById("colorwheel");
const gridLevel = document.getElementById("gridSize");

let currentMode = "SingleMode";
let currentColor = "black";
let gridSize = 0;

function gridProp() {
    gridSize = gridLevel.value;
    
        const adjustGrid = document.getElementById("gridBoard");
        adjustGrid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        adjustGrid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        
        for(let i= 0; i< gridSize * gridSize; i++) {
            const gridElement = document.createElement("div");
            gridElement.classList.add("grid-item");
            gridElement.addEventListener("click", changeColor)
            adjustGrid.appendChild(gridElement)
        }
    }
    
    function changeColor(event) {
        
        const gridElement = event.target;
        if (currentMode === "SingleMode") {
            gridElement.style.backgroundColor = currentColor;
            console.log("entrou no if")
        }
        else if (currentMode === "RainbowMode") {
            const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            gridElement.style.backgroundColor = randomColor;
            console.log('entrou no else')
        }
    }
    
    function turnSingle() {
        currentMode = "SingleMode"
        console.log("modo alterado para single");
    }
    function turnRainbow() {
        console.log("modo alterado para rainbow");
        currentMode = "RainbowMode"
    }    
    function colorPick() {
        currentColor = colorChoice.value;
    }

    
colorChoice.addEventListener("input", colorPick);
gridLevel.addEventListener("input", gridProp);

rainbowMode.addEventListener("click", function() {
    currentMode = "RainbowMode"
    console.log("modo alterado para rainbow");
});
singleMode.addEventListener("click", function() {
    currentMode = "SingleMode"
    console.log("modo alterado para single");
});
