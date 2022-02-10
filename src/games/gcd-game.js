import gameProcess from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

function getGreatestDivider(numOne, numTwo) {
  return numTwo ? getGreatestDivider(numTwo, numOne % numTwo) : numOne;
}

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
