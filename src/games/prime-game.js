import gameProcess from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const ifNumIsEven = (num) => {
  const numberOfDividers = [];
  for (let oneByOne = 1; oneByOne <= num; oneByOne += 1) {
    if (num % oneByOne === 0) {
      numberOfDividers.push(oneByOne);
    }
  }
  if (numberOfDividers.length <= 2) {
    return 'yes';
  }
  return 'no';
};

export function primeRound() {
  const randomNumber = getRandomNumber(1, 100);
  const roundResult = ifNumIsEven(randomNumber);
  return { roundQuestion: randomNumber, roundResult };
}

export default function gamePrime() {
  gameProcess(primeRound, gameTask);
}
