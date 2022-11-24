

export const transform = (oldObj) => {
  let newObj = {};
  for (let score in oldObj) {
    oldObj[score].forEach(letter => newObj[letter.toLowerCase()] =+ score)
  }
  return newObj;
};