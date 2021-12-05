let colorMode = false;
let gridSize = 16;

function generateCells(cells) {
    const container = document.querySelector('.container-draw');
    // cell-column cell-row
    if (cells < 1 || cells > 100) {
        console.log(`Invalid value, please use a value between 1 and 100`);
        return;
    }

    for (let i = 0; i < cells; i++) {
        let newDiv = document.createElement('div');
        newDiv.className = 'cell-column';
        container.appendChild(newDiv);
    }

    let columns = document.querySelectorAll('.cell-column');

    columns.forEach(column => {
        for (let i = 0; i < cells; i++) {
            let newDiv = document.createElement('div');
            newDiv.className = 'cell-row';
            newDiv.addEventListener('mouseover', sketch);
            column.appendChild(newDiv);
        }
    });
}

// create a function that changes the color of the div on 'hover'
function sketch(e) {
    if (colorMode) {
        e.target.style.backgroundColor = document.querySelector('#draw-color').value;
    } else {
        e.target.style.backgroundColor = "black";
    }
}

function resetSketch(inputSize) {
    if (isNaN(inputSize)) {
        document.querySelector('.warning-text').textContent = `Please enter a number`;
        return;
    }

    if (inputSize < 1 || inputSize > 100) {
        document.querySelector('.warning-text').textContent = `Please enter a value between 1 and 100!`;
    } else {
        document.querySelector('.warning-text').textContent = ``;
        
        const elements = document.querySelectorAll('.cell-column');
        elements.forEach(element => {
            element.parentNode.removeChild(element);
        })

        generateCells(inputSize);
        gridSize = inputSize;
    }
}

generateCells(gridSize);
document.querySelector('.button-reset').addEventListener('click', clearSketch);

document.querySelector('.button-black').addEventListener('click', function(e) {
    colorMode = false;
    e.target.style.border = '2px solid black';
    document.querySelector('.button-color').style.border = '0px solid black';
});

document.querySelector('.button-color').addEventListener('click', function(e) {
    colorMode = true;
    e.target.style.border = '2px solid black';
    document.querySelector('.button-black').style.border = '0px solid black';
});

function newValue(e) {
    if (event.key === 'Enter') {
        resetSketch(+e.value);
    }
}

function clearSketch() {
    const elements = document.querySelectorAll('.cell-column');
    elements.forEach(element => {
        element.parentNode.removeChild(element);
    })

    generateCells(gridSize);
}