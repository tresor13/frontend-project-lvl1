import readlineSync from 'readline-sync';
import { getRandomNumber, gameProcess } from '../index.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

function roundGCD() {
  const firstRandomNum = getRandomNumber(1, 100);
  const secondRandomNum = getRandomNumber(1, 100);
  const commonDividers = [];
  for (let divider = 1; divider <= firstRandomNum; divider += 1) {
    if (firstRandomNum % divider === 0 && secondRandomNum % divider === 0) {
      commonDividers.push(divider);
    }
  }

  const maxCommonDivider = commonDividers[commonDividers.length - 1];
  const userAnswer = readlineSync.question(
    `Question: ${firstRandomNum} ${secondRandomNum} \nYour answer:  `,
  );
  if (Number(userAnswer) === maxCommonDivider) {
    console.log('Correct!');
    return true;
  }
  console.log(
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${maxCommonDivider}'`,
  );
  return false;
}

export default function gameGCD() {
  gameProcess(roundGCD, gameTask);
}
