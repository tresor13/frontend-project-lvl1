import readlineSync from "readline-sync";

function round() {
  let num = Math.floor(Math.random() * 100) + 1;
  const userAnswer = readlineSync.question(`Question: ${num} \nYour answer: `);
  if (
    (userAnswer === "yes" && num % 2 === 0) ||
    (userAnswer === "no" && num % 2 === 1)
  ) {
    console.log("Correct!");
    return true;
  } else if (userAnswer !== "yes" && num % 2 === 0) {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.`
    );
    return false;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
    return false;
  }
}

export default function game() {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name?  ");
  console.log(`Hello ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswer = 0;
  while (correctAnswer < 3) {
    if (round() === true) {
      correctAnswer += 1;
    } else {
      break;
    }
  }
  correctAnswer < 3
    ? console.log("Try again!")
    : console.log(`Congratulations, ${userName}!`);
}
