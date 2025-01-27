const containerDiv = document.querySelector('.container');

// const gridDiv = document.createElement('div');

// gridDiv.classList.add("test");

// containerDiv.appendChild(gridDiv);

function createGrid (rows,colums) {
    for (i = 0; i < (rows * colums); i++){
        const square = document.createElement('div');
        square.textContent = (i+1);
        containerDiv.appendChild(square).className = "test";
    }
} 