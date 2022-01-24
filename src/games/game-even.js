import readlineSync from 'readline-sync';
import { getRandomNumber, greetings, getScore } from '../index.js';

function round() {
  const randomNumber = getRandomNumber();
  const userAnswer = readlineSync.question(
    `Question: ${randomNumber} \nYour answer: `,
  );
  if (
    (userAnswer === 'yes' && randomNumber % 2 === 0)
    || (userAnswer === 'no' && randomNumber % 2 === 1)
  ) {
    console.log('Correct!');
    return true;
  }
  if (userAnswer !== 'yes' && randomNumber % 2 === 0) {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.`,
    );
    return false;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
  return false;
}

export default function gameEven() {
  const userName = greetings();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  getScore(round, userName);
}
