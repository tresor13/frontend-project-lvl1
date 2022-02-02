import gameProcess from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameTask = 'What is the roundResult of the expression?';

function getMathematicalAction() {
  const items = ['+', '-', '*'];
  const item = items[getRandomNumber(0, items.length - 1)];
  return item;
}

export function calculatorRound() {
  const randomNumberOne = getRandomNumber(1, 100);
  const randomNumberTwo = getRandomNumber(1, 100);
  const mathAction = getMathematicalAction();
  let roundResult = '';
  switch (mathAction) {
    case '+':
      roundResult += String(randomNumberOne + randomNumberTwo);
      break;
    case '-':
      roundResult += String(randomNumberOne - randomNumberTwo);
      break;
    case '*':
      roundResult += String(randomNumberOne * randomNumberTwo);
      break;
    default:
      return 'math action error';
  }
  const expression = `${randomNumberOne} ${mathAction} ${randomNumberTwo}`;
  const roundQuestion = expression;
  return { roundQuestion, roundResult };
}

export default function gameCalculator() {
  gameProcess(calculatorRound, gameTask);
}
