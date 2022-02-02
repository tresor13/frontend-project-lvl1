import gameProcess from '../index.js';
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
  const roundResult = String(
    originalNumber + positionOfDeletedValue * differenceNum,
  );
  matrixOfValues[positionOfDeletedValue] = '..';
  const roundQuestion = `${matrixOfValues.join(' ')} `;
  return { roundQuestion, roundResult };
}

export default function progressionGame() {
  gameProcess(progressionRound, gameTask);
}
