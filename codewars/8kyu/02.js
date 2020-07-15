// Is n divisible by x and y?

function isDivisible(n, x, y) {
  if (n % x === 0) {
    if (n % y === 0) {
      console.log(true);
      return true;
    }
  }
  console.log(false);
  return false;
}

isDivisible(3, 3, 4); // false
isDivisible(12, 3, 4); // true
isDivisible(8, 3, 4); // false
isDivisible(48, 3, 4); // true
