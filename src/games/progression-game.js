import gameProcess from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameTask = 'What number is missing in the progression?';

function getProgression(num, diff) {
  const matrixOfValues = [num];
  for (let numberOfValue = 0; numberOfValue < 9; numberOfValue += 1) {
    const nextValue = matrixOfValues[numberOfValue] + diff;
    matrixOfValues.push(nextValue);
  }
  return matrixOfValues;
}

export function progressionRound() {
  const originalNumber = getRandomNumber(1, 100);
  const differenceNum = getRandomNumber(1, 10);
  const positionOfDeletedValue = Math.floor(Math.random() * 9);
  const progression = getProgression(originalNumber, differenceNum);
  progression[positionOfDeletedValue] = '..';
  const roundResult = String(
    originalNumber + positionOfDeletedValue * differenceNum,
  );
  const roundQuestion = progression.join(' ');
  return { roundQuestion, roundResult };
}

export default function progressionGame() {
  gameProcess(progressionRound, gameTask);
}
