/* eslint-disable no-var */
/* eslint-disable import/no-mutable-exports */
import readlineSync from 'readline-sync';
// eslint-disable-next-line import/prefer-default-export
export var userName = readlineSync.question('May I have your name?');
console.log('Welcome to the Brain Games!');
console.log(`Hello ${userName}!`);
