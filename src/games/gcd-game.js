import gameProcess from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const getGreatestDivider = (numOne, numTwo) => {
  let greatestDivider = 0;
  const smallestNumber = Math.min(numOne, numTwo);
  for (let divider = 1; divider <= smallestNumber; divider += 1) {
    if (numOne % divider === 0 && numTwo % divider === 0) {
      greatestDivider = divider;
    }
  }
  return greatestDivider;
};

function roundGCD() {
  const firstRandomNum = getRandomNumber(1, 100);
  const secondRandomNum = getRandomNumber(1, 100);
  const roundResult = String(
    getGreatestDivider(firstRandomNum, secondRandomNum),
  );
  const roundQuestion = `${firstRandomNum} ${secondRandomNum}`;
  return { roundQuestion, roundResult };
}

export default function gameGCD() {
  gameProcess(roundGCD, gameTask);
}
