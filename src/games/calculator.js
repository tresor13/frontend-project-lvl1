import gameProcess from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameTask = 'What is the roundResult of the expression?';
const items = ['+', '-', '*'];

const calculator = (numOne, numTwo, mathAction) => {
  switch (mathAction) {
    case '+':
      return numOne + numTwo;
    case '-':
      return numOne - numTwo;
    case '*':
      return numOne * numTwo;
    default:
      throw new Error('Unknown order state!');
  }
};
export function calculatorRound() {
  const randomNumOne = getRandomNumber(1, 100);
  const randomNumTwo = getRandomNumber(1, 100);
  const mathAction = items[getRandomNumber(0, items.length - 1)];
  const roundResult = String(
    calculator(randomNumOne, randomNumTwo, mathAction),
  );
  const roundQuestion = `${randomNumOne} ${mathAction} ${randomNumTwo}`;
  return { roundQuestion, roundResult };
}

export default function gameCalculator() {
  gameProcess(calculatorRound, gameTask);
}
