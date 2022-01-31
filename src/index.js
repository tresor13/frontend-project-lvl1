import readlineSync from 'readline-sync';

export function greetings() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
}

export function getScore(gameFunc, userName) {
  let score = 0;
  while (score < 3) {
    const gameFuncResult = gameFunc();
    if (gameFuncResult.result === true) {
      console.log('Correct!');
      score += 1;
    } else {
      console.log(
        `"${gameFuncResult.userAnswer}" is a wrong answer ;(. Correct answer was "${gameFuncResult.roundResult}"`,
      );
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
