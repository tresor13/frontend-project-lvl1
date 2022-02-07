import gameProcess from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameTask = 'What is the roundResult of the expression?';

const calculator = (numOne, numTwo, mathAction) => {
  switch (mathAction) {
    case '+':
      return String(numOne + numTwo);
    case '-':
      return String(numOne - numTwo);
    case '*':
      return String(numOne * numTwo);
    default:
      return 'math action error';
  }
};
export function calculatorRound() {
  const randomNumOne = getRandomNumber(1, 100);
  const randomNumTwo = getRandomNumber(1, 100);
  const items = ['+', '-', '*'];
  const mathAction = items[getRandomNumber(0, items.length - 1)];
  const roundResult = calculator(randomNumOne, randomNumTwo, mathAction);
  const roundQuestion = `${randomNumOne} ${mathAction} ${randomNumTwo}`;
  return { roundQuestion, roundResult };
}

export default function gameCalculator() {
  gameProcess(calculatorRound, gameTask);
}
