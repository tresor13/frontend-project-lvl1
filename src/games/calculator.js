import readlineSync from 'readline-sync';
import { gameProcess } from '../index.js';
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
  let roundResult = 0;
  switch (mathAction) {
    case '+':
      roundResult += randomNumberOne + randomNumberTwo;
      break;
    case '-':
      roundResult += randomNumberOne - randomNumberTwo;
      break;
    case '*':
      roundResult += randomNumberOne * randomNumberTwo;
      break;
    default:
      return 'math action error';
  }
  const expression = `${randomNumberOne} ${mathAction} ${randomNumberTwo}`;
  const userAnswer = readlineSync.question(
    `Question: ${expression} \nYour answer: `,
  );
  if (Number(userAnswer) === roundResult) {
    return { result: true, userAnswer, roundResult };
  }
  return { result: false, userAnswer, roundResult };
}

export default function gameCalculator() {
  gameProcess(calculatorRound, gameTask);
}
