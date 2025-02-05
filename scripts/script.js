const gridContainer = document.querySelector('#container');
const btnGridChange = document.querySelector('#btn-grid-change');
const btnCleanUp = document.querySelector('#cleanUp');
const containerHeight = gridContainer.clientHeight;
const minSize = 1;
const maxSize = 100;
let size = 16;
let square = '';

btnGridChange.addEventListener('click', setGrid);
btnCleanUp.addEventListener('click', () => createGrid(size));

gridContainer.onmouseover = function(event){
    let target = event.target;

    if (target.className != 'squares') return;

    setColor(target);
};

function setGrid() {
    size = prompt('Set a grid size (max 100):');
    size = parseInt(size);

    if (size >= minSize && size <= maxSize) {
        createGrid(size);
    } else {
        alert('Please enter a number between 1 and 100');
    }
}

function setColor (targetSquare) {
    square = targetSquare;
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    let currentBrightness = square.dataset.brightness || 100; //set current brightness data to 100
    currentBrightness = parseInt(currentBrightness) - 10;
    square.style.filter = `brightness(${currentBrightness}%)`;
    square.dataset.brightness = currentBrightness; //restore brightness value
    square.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

function createGrid (size) {
    gridContainer.innerHTML = '';
    const squareSize = (containerHeight / size);
    
    for (i = 0; i < (size * size); i++) {
        square = document.createElement('div');
        square.classList.add('squares');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        gridContainer.appendChild(square); 
    }
} 

// set default grid size
createGrid(size); 
