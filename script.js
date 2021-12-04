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
    e.target.style.backgroundColor = "black";
}

function resetSketch() {
    // delete divs
    const elements = document.querySelectorAll('.cell-column');
    elements.forEach(element => {
        element.parentNode.removeChild(element);
    })

    // prompt new size
    let newSize = 0;
    while (newSize < 1 || newSize > 100) {
        newSize = prompt('Please enter a new size (1-100):');
    }

    generateCells(newSize);
}

generateCells(16);
document.querySelector('.button-reset').addEventListener('click', resetSketch);