import readlineSync from 'readline-sync';

export function greetings() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
}

export function getRandomNumber(min, max) {
  const num = Math.floor(Math.random() * max) + min;
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
    console.log(`Let's try again, ${userName}!`);
  } else {
    console.log(`Congratulations, ${userName}!`);
  }
}

export function gameProcess(roundFunction, gameTask) {
  const userName = greetings();
  console.log(gameTask);
  getScore(roundFunction, userName);
}
