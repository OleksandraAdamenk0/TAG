let cells = Array.from({ length: 16 }, (_, i) => i)
    .sort(() => Math.random() - 0.5);

console.log(cells);

const playArea = document.querySelector('.play-area');

playArea.addEventListener('click', (e) => {
    const clickedCell = e.target;
    if (this.contains(clickedCell) && clickedCell !== this) {
        const emptyCell = document.getElementById('grid-empty');

        const clickedPosition = clickedCell.style.gridArea.split(' / ').map(Number);
        const emptyPosition = emptyCell.style.gridArea.split(' / ').map(Number);

        console.log(clickedPosition, emptyPosition);
    }
})

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
