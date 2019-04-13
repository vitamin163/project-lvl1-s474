import getRandomNumber from '../ utilities';
import generateGame from '..';

const isDivisor = (num, div) => num % div === 0;
const gameDescription = 'Find the greatest common divisor of given numbers.\n';

const makeData = () => {
  const dividendA = getRandomNumber(1, 100);
  const dividendB = getRandomNumber(1, 100);

  const getGCD = (firstDividend, secondDividend) => { // GCD - greatest common divisor.
    let gcd;
    for (let divisor = 1; divisor <= firstDividend && secondDividend; divisor += 1) {
      if (isDivisor(firstDividend, divisor) && isDivisor(secondDividend, divisor)) {
        gcd = divisor;
      }
    }
    return gcd;
  };

  const question = `${dividendA} ${dividendB}`;
  const correctAnswer = getGCD(dividendA, dividendB);
  return { question, correctAnswer };
};

export default () => generateGame(gameDescription, makeData);
