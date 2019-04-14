import getRandomNumber from '../ utilities';
import generateGame from '..';

const gameDescription = 'What number is missing in the progression?';

const lengthProgression = 10;

const makeProgression = (startElement, diff) => {
  const progression = [];
  for (let positionElement = 0; positionElement <= lengthProgression; positionElement += 1) {
    progression[positionElement] = startElement + diff * positionElement;
  }
  return progression;
};

const makeData = () => {
  const elementsDifference = getRandomNumber(2, 10);
  const firstElement = getRandomNumber(1, 11);
  const hiddenElementPosition = getRandomNumber(1, 11);

  const progression = makeProgression(firstElement, elementsDifference);
  const correctAnswer = String(progression[hiddenElementPosition]);
  progression[hiddenElementPosition] = '..';
  const question = progression.join(' ');
  return { question, correctAnswer };
};

export default () => generateGame(gameDescription, makeData);
