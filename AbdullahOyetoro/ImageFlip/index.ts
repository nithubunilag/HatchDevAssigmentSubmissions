class Matrices{
  static Multiplication(matrixA: number[][], matrixB: number[][]): number[][] {
    // Check if the matrices can be multiplied
    if (matrixA[0].length !== matrixB.length) {
      throw new Error("Matrices cannot be multiplied");
    }
  
    let rowsA = matrixA.length;
    let colsA = matrixA[0].length;
    let colsB = matrixB[0].length;
  
    // Initialize the answer matrix with zeros
    let answer: number[][] = Array.from({ length: rowsA }, () => Array(colsB).fill(0));
  
    for (let i = 0; i < rowsA; i++) {
      for (let j = 0; j < colsB; j++) {
        let val = 0;
        for (let k = 0; k < colsA; k++) {
          val += matrixA[i][k] * matrixB[k][j];
        }
        answer[i][j] = val;
      }
    }
    
    return answer;
  }
  //Image manipulation basically works with the principle of Linear transformation
  static rotation(matrixb:number[][]){
    let rotationA = [[0,-1,0],[1,0,0],[0,0,1]]
    //the matrix of linear transformation of 3X3 matrices
    let answer = Matrices.Multiplication(rotationA,matrixb)
    return answer
  }    
}
let matrix1: number[][] = [[3, 2, 3], [2, 4, 6], [4, 2, 3]];
let matrix2: number[][] = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];

console.log(Matrices.Multiplication(matrix1,matrix2))
console.log(Matrices.rotation(matrix2))