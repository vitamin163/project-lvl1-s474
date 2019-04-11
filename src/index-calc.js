import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');

  console.log('What is the result of the expression? \n');

  const userName = readlineSync.question('May I have your name?: ');

  console.log(`Hello, ${userName}! \n`);

  const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  const finalRound = 3;

  for (let round = 0; round < finalRound; round += 1) {
    const firstNumber = randomNumber(1, 100);
    const secondNumber = randomNumber(1, 100);
    const operator = ['+', '-', '*'];
    const additionResult = firstNumber + secondNumber;
    const subtractionResult = firstNumber - secondNumber;
    const multiplicationResult = firstNumber * secondNumber;
    const arrayResult = [additionResult, subtractionResult, multiplicationResult];
    const randomOperation = randomNumber(0, 3);
    console.log(`Question: ${firstNumber} ${operator[randomOperation]} ${secondNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (arrayResult[randomOperation] === +answer) {
      console.log('Correct!');
    } else if ((arrayResult[randomOperation] !== +answer)) {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${arrayResult[randomOperation]}. \n Let's try again, ${userName}`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
