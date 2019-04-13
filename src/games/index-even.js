import getRandomNumber from '../ utilities';
import generateGame from '..';

const gameDescription = 'Answer "yes" if number even otherwise answer "no". \n';

const isEven = num => num % 2 === 0;

const makeData = () => {
  const isEvenNumber = getRandomNumber(1, 1000);
  const question = `${isEvenNumber}`;
  const correctAnswer = isEven(isEvenNumber) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => generateGame(gameDescription, makeData);
