import readlineSync from 'readline-sync';
import { getRandomNumber, gameProcess } from '../index.js';

const gameTask = 'What is the result of the expression?';

function getMathematicalAction() {
  const items = ['+', '-', '*'];
  const item = items[getRandomNumber(0, items.length - 1)];
  return item;
}

export function calculatorRound() {
  const randomNumberOne = getRandomNumber(1, 100);
  const randomNumberTwo = getRandomNumber(1, 100);
  const mathAction = getMathematicalAction();
  let result = 0;
  switch (mathAction) {
    case '+':
      result += randomNumberOne + randomNumberTwo;
      break;
    case '-':
      result += randomNumberOne - randomNumberTwo;
      break;
    case '*':
      result += randomNumberOne * randomNumberTwo;
      break;
    default:
      return 'math action error';
  }
  const expression = `${randomNumberOne} ${mathAction} ${randomNumberTwo}`;
  const userAnswer = readlineSync.question(
    `Question: ${expression} \nYour answer: `,
  );
  if (Number(userAnswer) === result) {
    console.log('Correct!');
    return true;
  }
  console.log(
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'`,
  );
  return false;
}

export default function gameCalculator() {
  gameProcess(calculatorRound, gameTask);
}
