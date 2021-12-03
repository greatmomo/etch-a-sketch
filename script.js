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
            column.appendChild(newDiv);
        }
    });
}