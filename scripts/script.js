const gridContainer = document.querySelector('#grid-container');
const containerHeight = gridContainer.clientHeight;

console.log(containerHeight);

function createGrid (rows,columns) {
    gridContainer.innerHTML = '';

    for (i = 0; i < (rows * columns); i++){
        const square = document.createElement('div');
        square.style.width = `${Math.floor(containerHeight / rows)}px`;
        square.style.height = `${Math.floor(containerHeight / columns)}px`;
        gridContainer.appendChild(square).className = "squares";
    }
} 