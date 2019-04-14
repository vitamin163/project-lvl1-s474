import getRandomNumber from '../ utilities';
import generateGame from '..';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  const sqrt = Math.sqrt(num);
  for (let denom = 2; denom <= sqrt / 2; denom += 1) {
    if (num % denom === 0) {
      return false;
    }
  }
  return true;
};

const makeData = () => {
  const question = getRandomNumber(1, 200);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => generateGame(gameDescription, makeData);
