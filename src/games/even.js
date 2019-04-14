import getRandomNumber from '../ utilities';
import generateGame from '..';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const makeData = () => {
  const number = getRandomNumber(1, 1000);
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => generateGame(gameDescription, makeData);
