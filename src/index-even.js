import readlineSync from 'readline-sync';

export default () => {
  const greeting = () => console.log('Welcome to the Brain Games!');
  greeting();

  const ruleBrainEven = () => console.log('Answer "yes" if number even otherwise answer "no". \n');
  ruleBrainEven();

  const userName = readlineSync.question('May I have your name?: ');

  const greetingName = () => console.log(`Hello, ${userName}! \n`);
  greetingName();

  const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  const questionBrainEven = () => {
    const num = randomNumber(1, 1000);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (num % 2 === 0 && answer === 'yes') {
      return console.log('Correct!');
    }
    if (num % 2 !== 0 && answer === 'no') {
      return console.log('Correct!');
    }
    return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. \n Let's try again, ${userName}`);
  };

  const nextLap = () => {
    for (let i = 0; i < 4;) {
      if (i === 3) {
        return console.log(`Congratulations, ${userName}`);
      }
      if (questionBrainEven(randomNumber(1, 1000))) { // Не знаю как указать условие, ведь функция questionBrainEven возвращает comsole.log  
        i += 1;
      }
      return;
    }
  };
  nextLap();
};
