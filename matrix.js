let matrix = [];
let dimension;
let suma = 0;
let resta = 0;
dimension = prompt("ingrese dimension de la matriz.");
dimension = parseInt(dimension);

function crearMatrix(dimension) {
  for (let i = 0; i < dimension; i++) {
    matrix[i] = new Array();
  }

  for (i = 0; i < dimension; i++) {
    for (let j = 0; j < dimension; j++) {
      let valor = prompt("ingrese numero para la matrix.");

      matrix[j][i] = valor;
    }
  }
}

function operacion(matrix) {
  for (i = 0; i < dimension; i++) {
    for (let j = 0; j < dimension; j++) {
      if (j == i) {
        suma += parseInt(matrix[i][j]);
      }
      if (i == dimension - j - 1) {
        resta += parseInt(matrix[i][j]);
      }
    }
  }

  resta = Math.abs(resta);
  suma = Math.abs(suma);

  console.log(suma - resta);
}

crearMatrix(dimension);
operacion(matrix);
