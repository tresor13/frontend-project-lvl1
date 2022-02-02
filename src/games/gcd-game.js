import gameProcess from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

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

  const roundResult = String(commonDividers[commonDividers.length - 1]);
  const roundQuestion = `${firstRandomNum} ${secondRandomNum}`;
  return { roundQuestion, roundResult };
}

export default function gameGCD() {
  gameProcess(roundGCD, gameTask);
}
