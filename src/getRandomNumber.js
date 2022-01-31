export default function getRandomNumber(min, max) {
  const num = Math.floor(Math.random() * max) + min;
  return num;
}
