const treasureX = Math.floor(Math.random() * 10);
const treasureY = Math.floor(Math.random() * 10);

let attempts = 0;

const gameBoard = document.getElementById('gameBoard');
const message = document.getElementById('message');

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.x = i;
        cell.dataset.y = j;
        cell.addEventListener('click', handleCellClick);
        gameBoard.appendChild(cell);
    }
}

function handleCellClick(event) {
    const x = parseInt(event.target.dataset.x);
    const y = parseInt(event.target.dataset.y);
    attempts++;

    if (x === treasureX && y === treasureY) {
        const successRate = parseInt((3 / attempts) * 100);
        message.textContent = "Вітаю, ти виграв! Тобі знадобилось " + attempts + " спроб. Твій відсоток перемог: " + successRate + "%.";
        event.target.classList.add('color-gold');
        disableBoard();
    } else {
        const distance = Math.sqrt(Math.pow(x - treasureX, 2) + Math.pow(y - treasureY, 2));
        if (distance < 2) {
            message.textContent = 'Дуже гаряче!';
        } else if (distance < 4) {
            message.textContent = 'Гаряче!';
        } else if (distance < 6) {
            message.textContent = 'Тепло!';
        } else if (distance < 8) {
            message.textContent = 'Холодно!';
        } else {
            message.textContent = 'Дуже холодно!';
        }
        event.target.classList.add('color-red');
    }
}

function disableBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.removeEventListener('click', handleCellClick);
    });
}