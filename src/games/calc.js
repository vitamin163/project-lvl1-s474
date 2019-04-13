import getRandomNumber from '../ utilities';
import generateGame from '..';

const gameDescription = 'What is the result of the expression?';

const makeData = () => {
  const operators = ['+', '-', '*'];
  const randomOperation = getRandomNumber(0, operators.length);
  const operandA = getRandomNumber(1, 100);
  const operandB = getRandomNumber(1, 100);
  const question = `${operandA} ${operators[randomOperation]} ${operandB}`;
  const sumOfOperands = operandA + operandB;
  const differenceOfOperands = operandA - operandB;
  const productOfOperands = operandA * operandB;
  const operations = [sumOfOperands, differenceOfOperands, productOfOperands];
  const correctAnswer = operations[randomOperation];
  return { question, correctAnswer };
};

export default () => generateGame(gameDescription, makeData);
