import readlineSync from 'readline-sync';
import { gameProcess } from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

function roundEven() {
  const randomNumber = getRandomNumber(1, 100);
  const userAnswer = readlineSync.question(
    `Question: ${randomNumber} \nYour answer: `,
  );
  let roundResult = '';
  if (randomNumber % 2 === 0) {
    roundResult += 'yes';
  } else {
    roundResult += 'no';
  }
  if (userAnswer === roundResult) {
    return { result: true, userAnswer, roundResult };
  }
  return { result: false, userAnswer, roundResult };
}

export default function gameEven() {
  gameProcess(roundEven, gameTask);
}
