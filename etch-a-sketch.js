let isMouseDown = false;
document.body.onmousedown = () => isMouseDown = true;
document.body.onmouseup = () => isMouseDown = false;

// Creates the canvas grid that contains size * size grid element
function createGrid(size) {
    const canvas = document.getElementById("canvas");
    let canvasLength = canvas.offsetHeight;
    for (let i = 0; i < size * size; i++) {
        let gridElement = document.createElement('div');
        gridElement.classList.add("grid-element");
        gridElement.style.width = (canvasLength / size) + 'px';
        gridElement.style.height = 'auto';
        gridElement.addEventListener('mouseover', changeColor)
        gridElement.addEventListener('mousedown', changeColor)
        canvas.appendChild(gridElement);    
    }
}

function changeColor(e) {
    if (!isMouseDown && e.type === 'mouseover') return;
    e.target.style.backgroundColor = "black";
}
createGrid(24);