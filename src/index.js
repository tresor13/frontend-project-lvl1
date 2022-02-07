import readlineSync from 'readline-sync';

const amountOfRounds = 3;

export default function gameProcess(gameFunc, gameTask) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameTask);
  for (let round = 1; round <= amountOfRounds; round += 1) {
    const { roundQuestion, roundResult } = gameFunc();
    const userAnswer = readlineSync.question(
      `Question: ${roundQuestion} \nYour answer: `,
    );
    if (userAnswer === roundResult) {
      console.log('Correct!');
    } else {
      console.log(
        `"${userAnswer}" is a wrong answer ;(. Correct answer was "${roundResult}"`,
      );
      console.log(`Let's try again, ${userName}!`);
      return null;
    }
  }

  console.log(`Congratulations, ${userName}!`);
  return true;
}
