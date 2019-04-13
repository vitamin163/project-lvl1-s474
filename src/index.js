import readlineSync from 'readline-sync';

const numberOfRounds = 3;
export default (rules, makeData) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rules} \n`);

  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}! \n`);

  for (let round = 0; round < numberOfRounds; round += 1) {
    const { question, correctAnswer } = makeData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (String(correctAnswer) === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
