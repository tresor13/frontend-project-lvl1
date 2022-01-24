import readlineSync from "readline-sync";
import { getRandomNumber } from "../index.js";
import { greetings } from "../index.js";
import { getScore } from "../index.js";

function round() {
  const randomNumber = getRandomNumber();
  const userAnswer = readlineSync.question(
    `Question: ${randomNumber} \nYour answer: `
  );
  if (
    (userAnswer === "yes" && randomNumber % 2 === 0) ||
    (userAnswer === "no" && randomNumber % 2 === 1)
  ) {
    console.log("Correct!");
    return true;
  } else if (userAnswer !== "yes" && randomNumber % 2 === 0) {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.`
    );
    return false;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
    return false;
  }
}

export default function gameEven() {
  const userName = greetings();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  getScore(round, userName);
  //console.log("Welcome to the Brain Games!");
  //const userName = readlineSync.question("May I have your name?  ");
  //console.log(`Hello ${userName}!`);
  //console.log('Answer "yes" if the number is even, otherwise answer "no".');
  //let correctAnswer = 0;
  //while (correctAnswer < 3) {
  // if (round() === true) {
  //   correctAnswer += 1;
  // } else {
  //   break;
  // }
  // }
  // if (correctAnswer < 3) {
  //  console.log("Try again!");
  // } else {
  //   console.log(`Congratulations, ${userName}!`);
  // }
}
