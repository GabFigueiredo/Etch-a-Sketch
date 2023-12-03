const singleMode = document.getElementById("singleMode");
const rainbowMode = document.getElementById("rainbow");
const colorChoice = document.getElementById("colorwheel");
const gridLevel = document.getElementById("gridSize");
const eraserBtn = document.getElementById("eraser");
const rangeNumber = document.getElementById("rangeNumber");
const clearBtn = document.getElementById("clear");
const pressedBtns = document.querySelectorAll(".btnsCustom");


let currentMode = "SingleMode";
let currentColor = "black";
let gridSize = 32;
        
    // Function to resize the board
    gridLevel.addEventListener("input", function() {
        gridSize = gridLevel.value;
        
        const adjustGrid = document.getElementById("gridBoard");
        adjustGrid.innerHTML = ""
        adjustGrid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        adjustGrid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        rangeNumber.innerHTML = `${gridSize}X${gridSize}`
        
        for(let i= 0; i< gridSize * gridSize; i++) {
            const gridElement = document.createElement("div");
            gridElement.classList.add("grid-item");
            gridElement.addEventListener("click", changeColorOnClick);
            gridElement.addEventListener("mouseover", changeColorOnHover);
    
            adjustGrid.appendChild(gridElement);
        }
    });
    
    // Function to change the color on click
    function changeColorOnClick(event) {
        const gridTarget = event.target;
    
        if (currentMode === "SingleMode") {
            gridTarget.style.backgroundColor = currentColor;
            console.log("Clicked: Single Mode");
        }
        else if (currentMode === "RainbowMode") {
            const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            gridTarget.style.backgroundColor = randomColor;
            console.log('Clicked: Rainbow Mode');
        }
        else if (currentMode === "EraserMode") {
            gridTarget.style.backgroundColor = "white";
            console.log("Clicked: Eraser Mode");
        }
    }
    
    // Function to change the color on hover (only when left mouse button is pressed)
    function changeColorOnHover(event) {
        const gridTarget = event.target;
    
        if (event.buttons === 1) { // Check if left mouse button is pressed
            if (currentMode === "SingleMode") {
                gridTarget.style.backgroundColor = currentColor;
                
            }
            else if (currentMode === "RainbowMode") {
                const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
                gridTarget.style.backgroundColor = randomColor;
                
            }
            else if (currentMode === "EraserMode") {
                gridTarget.style.backgroundColor = "white";
                
            }
        }
    }
    // Function to press one button for a time
    pressedBtns.forEach(item => {
        item.addEventListener("click", () => {
            document.querySelector(".special")?.classList.remove("special");
            item.classList.add("special");
        })
    })

    // Function to clear the board
    clearBtn.addEventListener("click", function() {
        const gridItem = document.querySelectorAll(".grid-item");
        gridItem.forEach((item) => {
            item.style.backgroundColor = "white";
        })
        
    });

    // Functions to set the currentMode & currentColor
    rainbowMode.addEventListener("click", () => currentMode = "RainbowMode");
    singleMode.addEventListener("click", () => currentMode = "SingleMode");
    colorChoice.addEventListener("input", () => currentColor = colorChoice.value);
    eraserBtn.addEventListener("click", () => currentMode = "EraserMode");
    