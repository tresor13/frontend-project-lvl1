import gameProcess from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameTask = 'What number is missing in the progression?';

function getProgression(num, diff) {
  const matrixOfValues = [num];
  for (let i = 0; i < 9; i += 1) {
    const nextValue = matrixOfValues[i] + diff;
    matrixOfValues.push(nextValue);
  }
  return matrixOfValues;
}

export function progressionRound() {
  const originalNumber = getRandomNumber(1, 100);
  const differenceNum = getRandomNumber(1, 10);
  const positionOfDeletedValue = getRandomNumber(0, 9);
  const progression = getProgression(originalNumber, differenceNum);
  const roundResult = String(progression[positionOfDeletedValue]);
  progression[positionOfDeletedValue] = '..';
  const roundQuestion = progression.join(' ');
  return { roundQuestion, roundResult };
}

export default function progressionGame() {
  gameProcess(progressionRound, gameTask);
}
