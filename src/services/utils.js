import verbs from './api/verbs';
import adjectives from './api/adjectives';

function randomNumber(max) {
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax));
}

export function getVerbs() {
  const verb = verbs[randomNumber(verbs.length)];
  return verb;
}

function getAdjectives() {
  const adjective = adjectives[randomNumber(adjectives.length)];
  return adjective;
}

function generateName() {
  const createVerbs = [];
  const createAdjectives = [];
  const fullName = [];

  for(let index = 0; index < 15; index += 1) {
    createVerbs.push(getVerbs());
    createAdjectives.push(getAdjectives());
  }
  
  const verbs = [...new Set(createVerbs)];
  const adjectives = [...new Set(createAdjectives)];

  for(let index = 0; index < 10; index += 1) {
    fullName.push(`${verbs[index]} ${adjectives[index]}`);
  }

  // Reference Set ----> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set

  return fullName;
}

export default generateName;
