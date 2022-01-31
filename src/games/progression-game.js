import readlineSync from 'readline-sync';
import { gameProcess } from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameTask = 'What number is missing in the progression?';

export function progressionRound() {
  const originalNumber = getRandomNumber(1, 100);
  const differenceNum = getRandomNumber(1, 10);
  const matrixOfValues = [originalNumber];
  for (let numberOfValue = 0; numberOfValue < 9; numberOfValue += 1) {
    const nextValue = matrixOfValues[numberOfValue] + differenceNum;
    matrixOfValues.push(nextValue);
  }
  const positionOfDeletedValue = Math.floor(Math.random() * 9);
  const roundResult = originalNumber + positionOfDeletedValue * differenceNum;
  matrixOfValues[positionOfDeletedValue] = '..';
  const userAnswer = readlineSync.question(
    `Question: ${matrixOfValues.join(' ')} \nYour answer: `,
  );
  if (Number(userAnswer) === roundResult) {
    return { result: true, userAnswer, roundResult };
  }
  return { result: false, userAnswer, roundResult };
}

export default function progressionGame() {
  gameProcess(progressionRound, gameTask);
}
