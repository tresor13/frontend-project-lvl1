import gameProcess from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const getIfNumberIsEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

function roundEven() {
  const randomNumber = getRandomNumber(1, 100);
  const roundResult = getIfNumberIsEven(randomNumber);
  return { roundQuestion: randomNumber, roundResult };
}

export default function gameEven() {
  gameProcess(roundEven, gameTask);
}
