// others.js
const pickRandom = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

export { pickRandom };