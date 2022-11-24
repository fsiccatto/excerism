
export class Matrix {
  constructor(matrix) {
    this.matrix = matrix.split('\n').map(el => el.split(' ').map(el => parseInt(el)));
    console.log(this.matrix[0]);
  }

  get rows() {
    return this.matrix;
  }
  
  
  get columns() {
    return this.matrix[0].map((col, index) => this.matrix.map(row => row[index]));
  }
}