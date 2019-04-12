import { randomNumber } from '../ utilities';
import generateGame, { numberOfRounds } from '..';

const rule = 'What is the result of the expression? \n';

const makeData = () => {
  const randomOperation = randomNumber(0, numberOfRounds);
  const firstGameNumber = randomNumber(1, 100);
  const secondGameNumber = randomNumber(1, 100);
  const operator = ['+', '-', '*'];
  const question = `${firstGameNumber} ${operator[randomOperation]} ${secondGameNumber}`;
  const additionResult = firstGameNumber + secondGameNumber;
  const subtractionResult = firstGameNumber - secondGameNumber;
  const multiplicationResult = firstGameNumber * secondGameNumber;
  const arrayResult = [additionResult, subtractionResult, multiplicationResult];
  const correctAnswer = arrayResult[randomOperation];
  return { question, correctAnswer };
};

export default () => generateGame(rule, makeData);
