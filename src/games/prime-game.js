import gameProcess from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isNumberPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let divider = 2; divider < num; divider += 1) {
    if (num % divider === 0) {
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
