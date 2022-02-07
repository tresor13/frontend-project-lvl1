import gameProcess from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameTask = 'What number is missing in the progression?';

function getProgression(num, diff, posOfDeletedValue) {
  const matrixOfValues = [num];
  for (let numberOfValue = 0; numberOfValue < 9; numberOfValue += 1) {
    const nextValue = matrixOfValues[numberOfValue] + diff;
    matrixOfValues.push(nextValue);
  }
  matrixOfValues[posOfDeletedValue] = '..';
  return matrixOfValues.join(' ');
}

export function progressionRound() {
  const originalNumber = getRandomNumber(1, 100);
  const differenceNum = getRandomNumber(1, 10);
  const positionOfDeletedValue = Math.floor(Math.random() * 9);
  const progression = getProgression(
    originalNumber,
    differenceNum,
    positionOfDeletedValue,
  );
  const roundResult = String(
    originalNumber + positionOfDeletedValue * differenceNum,
  );
  const roundQuestion = `${progression} `;
  return { roundQuestion, roundResult };
}

export default function progressionGame() {
  gameProcess(progressionRound, gameTask);
}
