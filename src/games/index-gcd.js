import { randomNumber, isDivisor } from '../ utilities';
import generateGame from '..';

const rule = 'Find the greatest common divisor of given numbers.\n';

const makeData = () => {
  const firstGameNumber = randomNumber(1, 100);
  const secondGameNumber = randomNumber(1, 100);
  const question = `${firstGameNumber} ${secondGameNumber}`;
  let gcd;
  for (let divisor = 1; divisor <= firstGameNumber && secondGameNumber; divisor += 1) {
    if (isDivisor(firstGameNumber, divisor) && isDivisor(secondGameNumber, divisor)) {
      gcd = divisor;
    }
  }
  const correctAnswer = gcd;
  return { question, correctAnswer };
};

export default () => generateGame(rule, makeData);
