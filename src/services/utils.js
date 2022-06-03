import verbs from './verbs';
import adjectives from './adjectives';

function randomNumber(max) {
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax));
}

function getVerbs() {
  const verb = verbs[randomNumber(verbs.length)]
  return verb;
}

function getAdjectives() {
  const adjective = adjectives[randomNumber(adjectives.length)]
  return adjective;
}

function generateName() {
  const createVerbs = [];
  const createAdjectives = [];
  const names = [];

  for(let index = 0; index < 15; index += 1) {
    createVerbs.push(getVerbs());
    createAdjectives.push(getAdjectives());
  }
  
  const verbs = [...new Set(createVerbs)];
  const adjectives = [...new Set(createAdjectives)];

  for(let index = 0; index < 10; index += 1) {
    names.push(`${verbs[index]} ${adjectives[index]}`)
  }

  // Reference Set ----> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set

  console.log(names);
  return names;
}

export default generateName;
