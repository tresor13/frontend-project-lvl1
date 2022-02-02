import readlineSync from 'readline-sync';

export default function gameProcess(gameFunc, gameTask) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const amountOfRounds = 3;
  let score = 0;
  console.log(gameTask);
  while (score < amountOfRounds) {
    const roundCondition = gameFunc();
    const userAnswer = readlineSync.question(
      `Question: ${roundCondition.roundQuestion} \nYour answer: `,
    );
    if (userAnswer === roundCondition.roundResult) {
      console.log('Correct!');
      score += 1;
    } else {
      console.log(
        `"${userAnswer}" is a wrong answer ;(. Correct answer was "${roundCondition.roundResult}"`,
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
