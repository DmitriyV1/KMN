import { EOption } from "../consts";

function getRandomElement() {
  const enumValues = Object.values(EOption);

  return enumValues[Math.floor(Math.random() * 3)];
}

export default getRandomElement;
