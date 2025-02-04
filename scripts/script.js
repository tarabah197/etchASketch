const gridContainer = document.querySelector('#container');
const btn = document.querySelector('button');
const containerHeight = gridContainer.clientHeight;
let square;

gridContainer.onmouseover = function(event){
    let target = event.target;

    if (target.tagName != 'DIV') return;

    setColor(target);
};

btn.addEventListener('click', setGrid);

function setGrid() {
    let size = prompt('Set a grid size (max 100):');
    size = parseInt(size);

    if (size <= 100) {
        createGrid(size);
    } else {
        alert('Please enter a number between 1 and 100');
    }
}

function setColor (targetSquare) {
    square = targetSquare;
    square.classList.add('squares-color');
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

// set default size
createGrid(16); 
