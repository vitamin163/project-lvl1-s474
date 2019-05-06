import getRandomNumber from '../getRandomNumber';
import generateGame from '..';

const gameDescription = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const makeData = () => {
  const randomOperation = getRandomNumber(0, operators.length);
  const operandA = getRandomNumber(1, 100);
  const operandB = getRandomNumber(1, 100);
  const question = `${operandA} ${operators[randomOperation]} ${operandB}`;
  let correctAnswer;
  switch (operators[randomOperation]) {
    case '+':
      correctAnswer = String(operandA + operandB);
      break;
    case '-':
      correctAnswer = String(operandA - operandB);
      break;
    case '*':
      correctAnswer = String(operandA * operandB);
      break;
    default:
  }
  return { question, correctAnswer };
};

export default () => generateGame(gameDescription, makeData);
