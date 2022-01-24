import readlineSync from 'readline-sync';
import { getRandomNumber, greetings, getScore } from '../index.js';

function getMathematicalAction() {
  const items = ['+', '-', '*'];
  const item = items[Math.floor(Math.random() * items.length)];
  return item;
}

export function calculatorRound() {
  const randomNumberOne = getRandomNumber();
  const randomNumberTwo = getRandomNumber();
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
  const userName = greetings();
  console.log('What is the result of the expression?');
  getScore(calculatorRound, userName);
}
