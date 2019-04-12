import { randomNumber, isEven } from '../ utilities';
import generateGame from '..';

const rule = 'Answer "yes" if number even otherwise answer "no". \n';

const makeData = () => {
  const gameNumber = randomNumber(1, 1000);
  const question = `${gameNumber}`;
  const correctAnswer = isEven(gameNumber) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => generateGame(rule, makeData);
