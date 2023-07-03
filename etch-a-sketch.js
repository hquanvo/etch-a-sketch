// buttons
const clearBtn = document.getElementById("clear");
const slider = document.getElementById("grid-slider");

// vars
let size = slider.value;

// add listeners
clearBtn.addEventListener('click', resetGrid);
slider.onchange = () => {
    size = slider.value;
    resetGrid();
}


// Creates the canvas grid that contains size * size grid element
function createGrid(size) {
    const canvas = document.getElementById("canvas");
    let canvasLength = canvas.offsetHeight;
    for (let i = 0; i < size * size; i++) {
        let gridElement = document.createElement('div');
        gridElement.draggable = false;
        gridElement.classList.add("grid-element");
        gridElement.style.width = (canvasLength / size) + 'px';
        gridElement.style.height = 'auto';
        gridElement.style.border = 'solid 1px #ececec';
        gridElement.style.boxSizing = 'border-box';
        gridElement.addEventListener('mouseover', changeColor)
        canvas.appendChild(gridElement);    
    }
}

function changeColor(e) {
    e.target.style.backgroundColor = "black";
}

function clearGrid() {
    document.getElementById("canvas").innerHTML = '';
}

function resetGrid() {
    clearGrid();
    createGrid(size);
}

createGrid(size);