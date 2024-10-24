import { EOption } from "../consts";

function getRandomElement() {
  const randomNumber = Math.random();
  const enumValues = Object.values(EOption);

  if (randomNumber < 0.33) {
    return enumValues[0];
  } else if (randomNumber > 0.66) {
    return enumValues[1];
  } else {
    return enumValues[2];
  }
}

export default getRandomElement;
