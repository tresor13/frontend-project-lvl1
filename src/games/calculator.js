import readlineSync from "readline-sync";
import { getRandomNumber } from "../index.js";
import { greetings } from "../index.js";
import { getScore } from "../index.js";

function getMathematicalAction() {
  const items = ["+", "-", "*"];
  var item = items[Math.floor(Math.random() * items.length)];
  return item;
}

export function calculatorRound() {
  const randomNumberOne = getRandomNumber();
  const randomNumberTwo = getRandomNumber();
  const mathAction = getMathematicalAction();
  const result = eval(`${randomNumberOne} ${mathAction} ${randomNumberTwo}`);
  const expression = `${randomNumberOne} ${mathAction} ${randomNumberTwo}`;
  const userAnswer = readlineSync.question(
    `Question: ${expression} \nYour answer: `
  );
  if (Number(userAnswer) === result) {
    console.log("Correct!");
    return true;
  } else {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'`
    );
    return false;
  }
}

export default function gameCalculator() {
  const userName = greetings();
  console.log("What is the result of the expression?");
  getScore(calculatorRound, userName);
}
