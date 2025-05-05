export function generateSpiralMatrix(size) {
  const matrix = Array(size).fill().map(() => Array(size).fill(0));
  let value = 1;
  let minRow = 0, maxRow = size - 1;
  let minCol = 0, maxCol = size - 1;
  let x = Math.floor(size / 2), y = Math.floor(size / 2);
  matrix[y][x] = value++;
  let step = 1;
  while (value <= size * size) {
    // right
    for (let i = 0; i < step && value <= size * size; i++) x++, matrix[y][x] = value++;
    // down
    for (let i = 0; i < step && value <= size * size; i++) y++, matrix[y][x] = value++;
    step++;
    // left
    for (let i = 0; i < step && value <= size * size; i++) x--, matrix[y][x] = value++;
    // up
    for (let i = 0; i < step && value <= size * size; i++) y--, matrix[y][x] = value++;
    step++;
  }
  return matrix;
} 