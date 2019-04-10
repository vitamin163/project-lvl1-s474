import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');

  console.log('Answer "yes" if number even otherwise answer "no". \n');

  const userName = readlineSync.question('May I have your name?: ');

  console.log(`Hello, ${userName}! \n`);

  const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  const isEven = num => num % 2 === 0;

  const finalRound = 3;

  for (let round = 0; round < finalRound; round += 1) {
    const number = randomNumber(1, 1000);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (isEven(number) && answer === 'yes') {
      console.log('Correct!');
    } else if (!isEven(number) && answer === 'no') {
      console.log('Correct!');
    } else if (isEven(number) && answer !== 'yes') {
      return console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'. \n Let's try again, ${userName}`);
    } else if (!isEven(number) && answer !== 'no') {
      return console.log(`${answer} is wrong answer ;(. Correct answer was 'no'. \n Let's try again, ${userName}`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
