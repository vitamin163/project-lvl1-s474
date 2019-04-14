import getRandomNumber from '../ utilities';
import generateGame from '..';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (num) => {
  for (let denom = 2; denom < num; denom += 1) {
    if (num % denom === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const makeData = () => {
  const number = getRandomNumber(1, 200);
  const question = `${number}`;
  const correctAnswer = isPrimeNumber(number);
  return { question, correctAnswer };
};

export default () => generateGame(gameDescription, makeData);
