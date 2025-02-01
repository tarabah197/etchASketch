const gridContainer = document.querySelector('#grid-container');
const containerHeight = gridContainer.clientHeight;
const rows = 16;
const columns = 16;
let square;

function createGrid () {
    gridContainer.innerHTML = '';
    
    for (i = 0; i < (rows * columns); i++) {
        square = document.createElement('div');
        square.style.width = `${Math.floor(containerHeight / rows)}px`;
        square.style.height = `${Math.floor(containerHeight / columns)}px`;
        gridContainer.appendChild(square).className = "squares"; 
    }
    // square =  document.querySelectorAll('.squares');
    // square.forEach(div => {
    //     div.style.borderColor = 'red';
    // });
} 

gridContainer.onmousedown = function(event){
    let target = event.target;

    if (target.tagName != 'DIV') return;

    setColor(target);
};

function setColor (targetSquare) {
    square = targetSquare;
    square.classList.add('squares-color');
}



window.addEventListener('load', createGrid);
window.addEventListener('resize', createGrid);
