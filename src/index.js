import readlineSync from 'readline-sync';

export function greetings() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  return userName;
}

export function getRandomNumber() {
  const num = Math.floor(Math.random() * 100) + 1;
  return num;
}

export function getSmallRandomNumber() {
  const num = Math.floor(Math.random() * 10) + 1;
  return num;
}

export function getScore(gameFunc, userName) {
  let score = 0;
  while (score < 3) {
    if (gameFunc() === true) {
      score += 1;
    } else {
      break;
    }
  }
  if (score < 3) {
    console.log('Try again!');
  } else {
    console.log(`Congratulations, ${userName}!`);
  }
}
