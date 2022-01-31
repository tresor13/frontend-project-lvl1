import readlineSync from 'readline-sync';
import { getRandomNumber, gameProcess } from '../index.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export function primeRound() {
  const randomNumber = getRandomNumber(1, 100);
  let numberOfDividers = 0;
  for (let oneByOne = 1; oneByOne <= randomNumber; oneByOne += 1) {
    if (randomNumber % oneByOne === 0) {
      numberOfDividers += 1;
    }
  }
  const userAnswer = readlineSync.question(
    `Question: ${randomNumber} \nYour answer: `,
  );
  if (
    (userAnswer === 'yes' && numberOfDividers <= 2)
    || (userAnswer === 'no' && numberOfDividers > 2)
  ) {
    return true;
  }
  if (userAnswer !== 'yes' && numberOfDividers <= 2) {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.`,
    );
    return false;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
  return false;
}

export default function gamePrime() {
  gameProcess(primeRound, gameTask);
}
