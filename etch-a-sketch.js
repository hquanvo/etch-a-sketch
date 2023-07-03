function createGrid(size) {
    const canvas = document.getElementById("canvas");
    let canvasLength = canvas.offsetHeight;
    console.log(canvasLength);
    for (let i = 0; i < size * size; i++) {
        let gridElement = document.createElement('div');
        gridElement.classList.add("grid-element");
        gridElement.style.width = (canvasLength / size) + 'px';
        gridElement.style.height = 'auto';
        gridElement.style.backgroundColor = "black";
        canvas.appendChild(gridElement);
        
    }
    let gridElement = document.querySelector('.grid-element');
    console.log(gridElement.style.width);
}

createGrid(16);