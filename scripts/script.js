const gridContainer = document.querySelector('#container');
const containerHeight = gridContainer.clientHeight;
let size = 16;
const squareSize = (containerHeight / size);
let square;



function createGrid (size) {
    gridContainer.innerHTML = '';
    
    for (i = 0; i < (size * size); i++) {
        square = document.createElement('div');
        square.classList.add('squares');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        gridContainer.appendChild(square); 
    }
} 

gridContainer.onmouseover = function(event){
    let target = event.target;

    if (target.tagName != 'DIV') return;

    setColor(target);
};

function setColor (targetSquare) {
    square = targetSquare;
    square.classList.add('squares-color');
}

createGrid(16);
