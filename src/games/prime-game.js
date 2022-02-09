import gameProcess from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isNumberPrime = (num) => {
  let numberOfDividers = 0;
  for (let divider = 1; divider <= num; divider += 1) {
    if (num % divider === 0) {
      numberOfDividers += 1;
    } else if (numberOfDividers > 2) {
      return false;
    }
  }
  return true;
};

export function primeRound() {
  const randomNumber = getRandomNumber(1, 100);
  const roundResult = isNumberPrime(randomNumber) ? 'yes' : 'no';
  return { roundQuestion: randomNumber, roundResult };
}

export default function gamePrime() {
  gameProcess(primeRound, gameTask);
}
