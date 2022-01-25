import readlineSync from 'readline-sync';
import {
  getRandomNumber,
  getSmallRandomNumber,
  greetings,
  getScore,
} from '../index.js';

export function progressionRound() {
  const originalNumber = getRandomNumber();
  const differenceNum = getSmallRandomNumber();
  const matrixOfValues = [originalNumber];
  for (let numberOfValue = 0; numberOfValue < 9; numberOfValue += 1) {
    const nextValue = matrixOfValues[numberOfValue] + differenceNum;
    matrixOfValues.push(nextValue);
  }
  const positionOfDeletedValue = Math.floor(Math.random() * 9);
  const result = originalNumber + positionOfDeletedValue * differenceNum;
  matrixOfValues[positionOfDeletedValue] = '..';
  const userAnswer = readlineSync.question(
    `Question: ${matrixOfValues.join(' ')} \nYour answer: `,
  );
  if (Number(userAnswer) === result) {
    console.log('Correct!');
    return true;
  }
  console.log(
    `${userAnswer} is a wrong answer. ;(. Correct answer was '${result}'`,
  );
  return false;
}

export default function progressionGame() {
  const userName = greetings();
  console.log('What number is missing in the progression?');
  getScore(progressionRound, userName);
}
