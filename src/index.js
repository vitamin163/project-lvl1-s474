import readlineSync from 'readline-sync';

export const numberOfRounds = 3;
export default (rules, makeData) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);

  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}! \n`);

  for (let round = 0; round < numberOfRounds; round += 1) {
    const { question, correctAnswer } = makeData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (String(correctAnswer) === userAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
