import getRandomNumber from '../getRandomNumber';
import generateGame from '..';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const makeData = () => {
  const question = getRandomNumber(1, 1000);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => generateGame(gameDescription, makeData);
