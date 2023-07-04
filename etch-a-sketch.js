// buttons
const clearBtn = document.getElementById("clear");
const slider = document.getElementById("grid-slider");
const slide_info = document.getElementById("slide-info");
const blackBtn = document.getElementById("black-btn");
const rainbowBtn = document.getElementById("rainbow-btn");

// vars
let size = slider.value;
let active = 'black';

// add listeners
clearBtn.addEventListener('click', resetGrid);
blackBtn.addEventListener('click', () => changeActiveButton('black'));
blackBtn.classList.add('active');
rainbowBtn.addEventListener('click', () => changeActiveButton('rainbow'));
slider.onchange = () => {
    size = slider.value;
    resetGrid();
}
slider.oninput = () => slide_info.innerHTML = "Grid size: " + slider.value + " x " + slider.value;

function changeActiveButton(mode) {
    switch (mode) {
        case 'black': {
            if (!blackBtn.classList.contains('active')) {
                rainbowBtn.classList.remove('active');
                blackBtn.classList.add('active');
                active = 'black';
            }
            break;
        }
        case 'rainbow': {
            if (!rainbowBtn.classList.contains('active')) {
                rainbowBtn.classList.add('active');
                blackBtn.classList.remove('active');
                active = 'rainbow';
            }
            break;
        }
    }
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
        gridElement.style.borderTop = 'solid 1px #ececec';
        gridElement.style.borderRight = 'solid 1px #ececec';
        gridElement.style.boxSizing = 'border-box';
        gridElement.addEventListener('mouseover', changeColor)
        canvas.appendChild(gridElement);    
    }
}

function changeColor(e) {
    if (active === 'black') {
        e.target.style.backgroundColor = "black";
    } else {
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);
        e.target.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")"
    }
}

function clearGrid() {
    document.getElementById("canvas").innerHTML = '';
}

function resetGrid() {
    clearGrid();
    createGrid(size);
}

createGrid(size);