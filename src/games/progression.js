import getRandomNumber from '../ utilities';
import generateGame from '..';

const gameDescription = 'What number is missing in the progression?';

const lengthProgression = 10;

const makeProgression = (startElement, diff) => {
  const progression = [];
  progression[0] = startElement;
  for (let positionElement = 1; positionElement <= lengthProgression; positionElement += 1) {
    progression[positionElement] = progression[positionElement - 1] + diff;
  }
  return progression;
};

const makeData = () => {
  const elementsDifference = getRandomNumber(2, 10);
  const firstElement = getRandomNumber(1, 11);
  const hiddenElementPosition = getRandomNumber(1, 11);

  const progression = makeProgression(firstElement, elementsDifference);
  const correctAnswer = progression[hiddenElementPosition];
  progression[hiddenElementPosition] = '..';
  const question = `${progression}`;
  return { question, correctAnswer };
};

export default () => generateGame(gameDescription, makeData);
