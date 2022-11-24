export const transpose = (arr) => {
  const numElements = Math.max(0, ...arr.map((row) => row.length));
  return [...Array(numElements)].map((_, index) =>
    arr.reduceRight((acc, row) => (row[index] || (acc ? " " : "")) + acc, "")
  );
};

/* export const transpose = (arr) => {
  let transposeArr = arr[0].split("").map((word, colIndex) => arr.map(row => row[colIndex]));
  return transposeArr.map(row => row.map(letter => letter));
};
 */
const input = ["ABC", "123"];
console.log(transpose(input));
