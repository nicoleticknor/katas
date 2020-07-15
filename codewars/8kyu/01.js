// Coefficients of the Quadratic Equation

function quadratic(x1, x2) {
  //   (x-x1) * (x-x2) = 0
  // x^2 - x(x2) - x(x1) + (x1*x2) = 0
  let array = [1];
  array.push((-x1) + (-x2));
  array.push(x1 * x2);
  console.log(array);
  return array;
}

quadratic(0, 1); // [1, -1, 0]
quadratic(1, 1); // [1, -2, 1]
quadratic(-4, -9); // [1, 13, 36]
quadratic(-5, -4); // [1, 9, 20]
quadratic(4, -9); // [1, 5, -36]
quadratic(5, -4); // [1, -1, -20]
