const start = document.getElementById('start');

const startGame = () => {
  const number = Math.floor(Math.random() * 1000) + 1;
  let attempts = 0;

  const guess = () => {
    const input = prompt('Введите число:');
    if (input === null || input === '') return;

    const parsed = +input;
    if (isNaN(parsed)) {
      alert('Это не число.');
      return guess();
    }

    attempts++;

    if (parsed < number) {
      alert('Загаданное число больше');
      guess();
    } else if (parsed > number) {
      alert('Загаданное число меньше');
      guess();
    } else {
      const willPlayAgain = confirm(
        `Победа! Количество попыток: ${attempts}. Сыграть снова?`,
      );
      if (willPlayAgain) {
        startGame();
      }
    }
  };

  guess();
};
start.addEventListener('click', startGame);
