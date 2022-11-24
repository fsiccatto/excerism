//

export const rows = (numRows) => {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  let result = [];
  let cont = 0;

  for (let row = 0; row < numRows; row++) {
    let arr = [];
    for (let col = 0; col <= row; col++) { // triangulo equilatero por lo que row = col
      if (col === 0 || col === row) { // primer y ultimo elemento de cada fila es 1
        arr.push(1);
      } else {
        arr.push((result[row - 1][col - 1] + result[row - 1][col]));
      }
    }
    result.push(arr);
  }
  return result;
};

console.log(rows(5));
console.log(rows(7));
console.log(rows(1));

/* Con recursion!
function pascalTriangle(level){
    if(level === 0){
        return [[1]]
    }
    const previousValue = pascalTriangle(level - 1); 
    const lastValOfPrevious =   previousValue[previousValue.length - 1]
    const currentValue =  lastValOfPrevious.reduce((acc,num,i) => {
        if(lastValOfPrevious[i + 1] != undefined){
            acc.push(lastValOfPrevious[i] + lastValOfPrevious[i + 1])
        }else{
            acc.push(1)
        }
        return acc;
    },[1]);
    const result = [...previousValue,currentValue]
    return result
     */