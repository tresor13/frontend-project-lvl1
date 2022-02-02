import gameProcess from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export function primeRound() {
  const randomNumber = getRandomNumber(1, 100);
  let numberOfDividers = 0;
  for (let oneByOne = 1; oneByOne <= randomNumber; oneByOne += 1) {
    if (randomNumber % oneByOne === 0) {
      numberOfDividers += 1;
    }
  }
  const roundQuestion = randomNumber;
  let roundResult = '';
  if (numberOfDividers <= 2) {
    roundResult += 'yes';
  } else {
    roundResult += 'no';
  }
  return { roundQuestion, roundResult };
}

export default function gamePrime() {
  gameProcess(primeRound, gameTask);
}
