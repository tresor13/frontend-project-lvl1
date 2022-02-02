import gameProcess from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

function roundEven() {
  const randomNumber = getRandomNumber(1, 100);
  const roundQuestion = randomNumber;
  let roundResult = '';
  if (randomNumber % 2 === 0) {
    roundResult += 'yes';
  } else {
    roundResult += 'no';
  }
  return { roundQuestion, roundResult };
}

export default function gameEven() {
  gameProcess(roundEven, gameTask);
}
