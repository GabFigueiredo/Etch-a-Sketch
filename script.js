let currentMode = "SingleMode";
let currentColor = "black";
let gridSize = 0;

const singleMode = document.getElementById("singleMode");
    singleMode.addEventListener("click", turnSingle);

    function turnSingle() {
        currentMode = "SingleMode"
    }

const rainbowMode = document.getElementById("rainbow");
    rainbowMode.addEventListener("click", turnRainbow);

    function turnRainbow() {
        currentMode = "RainbowMode"
    }    

const colorChoice = document.getElementById("colorwheel");
    colorChoice.addEventListener("input", colorPick);

    function colorPick() {
        currentColor = colorChoice.value;
    }

const gridLevel = document.getElementById("gridSize")
    gridLevel.addEventListener("input", gridProp);

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
        }

        else if (currentMode === "RainbowMode") {
            const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            gridElement.style.backgroundColor = randomColor;
        }
    }