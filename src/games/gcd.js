import getRandomNumber from '../getRandomNumber';
import generateGame from '..';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGCD = (firstDividend, secondDividend) => {
  const isDivisor = (num, div) => num % div === 0;
  let gcd;
  for (let divisor = 1; divisor <= firstDividend && secondDividend; divisor += 1) {
    if (isDivisor(firstDividend, divisor) && isDivisor(secondDividend, divisor)) {
      gcd = divisor;
    }
  }
  return gcd;
};

const makeData = () => {
  const a = getRandomNumber(1, 100);
  const b = getRandomNumber(1, 100);

  const question = `${a} ${b}`;
  const correctAnswer = String(getGCD(a, b));
  return { question, correctAnswer };
};

export default () => generateGame(gameDescription, makeData);
