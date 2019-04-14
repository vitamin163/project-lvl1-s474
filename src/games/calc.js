import getRandomNumber from '../ utilities';
import generateGame from '..';

const gameDescription = 'What is the result of the expression?';

const makeData = () => {
  const operators = ['+', '-', '*'];
  const randomOperation = getRandomNumber(0, operators.length);
  const operandA = getRandomNumber(1, 100);
  const operandB = getRandomNumber(1, 100);
  const question = `${operandA} ${operators[randomOperation]} ${operandB}`;
  let correctAnswer;
  switch (randomOperation) {
    case 0:
      correctAnswer = String(operandA + operandB);
      break;
    case 1:
      correctAnswer = String(operandA - operandB);
      break;
    default:
      correctAnswer = String(operandA * operandB);
  }
  return { question, correctAnswer };
};

export default () => generateGame(gameDescription, makeData);
