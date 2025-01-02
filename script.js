let cells = Array.from({ length: 16 }, (_, i) => i)
    .sort(() => Math.random() - 0.5);

console.log(cells);

const playArea = document.querySelector('.play-area');

function getIndexFromGridPosition([row, col]) {
    return (row - 1) * 4 + (col - 1);
}

function areCellsNeighbours(cell1, cell2) {
    return ((Math.abs(cell1[0] - cell2[0]) === 1 && cell1[1] - cell2[1] === 0)
        || (Math.abs(cell1[1] - cell2[1]) === 1 && cell1[0] - cell2[0] === 0));
}

function isWin() {
    for (let i = 0; i < 15; i++) {
        if (cells[i + 1] - cells[i] !== 1) {
            return false;
        }
    }
    return true;
}

playArea.addEventListener('click', (e) => {
    const clickedCell = e.target;
    if (playArea.contains(clickedCell) && clickedCell !== playArea) {
        const emptyCell = document.getElementById('grid-empty');

        const clickedPosition = clickedCell.style.gridArea.split(' / ').map(Number);
        const emptyPosition = emptyCell.style.gridArea.split(' / ').map(Number);

        if (areCellsNeighbours(clickedPosition, emptyPosition)) {
            emptyCell.style.gridArea = clickedPosition.join(' / ');
            clickedCell.style.gridArea = emptyPosition.join(' / ');

            const clickedIndex = getIndexFromGridPosition(clickedPosition);
            const emptyIndex = getIndexFromGridPosition(emptyPosition);

            [cells[clickedIndex], cells[emptyIndex]] = [cells[emptyIndex], cells[clickedIndex]];
            if (isWin()) {
                console.log("You win!!!!!");
                const winHeading = document.querySelector('h1');
                const restartButton = document.getElementById('restart');

                winHeading.classList.add('win');
                restartButton.style.display = 'block';
            }
        }
    }
})

const restartButton = document.getElementById('restart');
restartButton.addEventListener('click', () => {
    location.reload();
});

function initTag() {
    for (let i = 0; i < 16; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('common-grid');

        const row = Math.ceil((i + 1) / 4);
        const col = (i + 1) % 4 === 0 ? 4 : (i + 1) % 4;

        newDiv.style.gridArea = `${row} / ${col} / ${row + 1} / ${col + 1}`;

        if (cells[i] === 0) {
            newDiv.id = 'grid-empty';
            playArea.appendChild(newDiv);
            continue;
        }

        newDiv.textContent = cells[i].toString();

        playArea.appendChild(newDiv);
    }
}

initTag();
