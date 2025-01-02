let cells = Array.from({ length: 16 }, (_, i) => i)
    .sort(() => Math.random() - 0.5);

console.log(cells);


function initTag() {
    const playArea = document.querySelector('.play-area');

    for (let i = 0; i < 16; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('common-grid', `grid${cells[i]}`);

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