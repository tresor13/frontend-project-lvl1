import readlineSync from 'readline-sync';
import { getRandomNumber, gameProcess } from '../index.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

function roundEven() {
  const randomNumber = getRandomNumber(1, 100);
  const userAnswer = readlineSync.question(
    `Question: ${randomNumber} \nYour answer: `,
  );
  let result = '';
  if (randomNumber % 2 === 0) {
    result += 'yes';
  } else {
    result += 'no';
  }
  if (userAnswer === result) {
    return true;
  }
  console.log(
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'`,
  );
  return false;
}

export default function gameEven() {
  gameProcess(roundEven, gameTask);
}
