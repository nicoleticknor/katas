const palindromer = () => {
  let first;
  let last;
  let prod;
  let result;
  for (let i = 1; i < 100; i++) {
    for (let j = 1; j < 100; j++) {
      prod = (i * j).toString();
      if (prod.length % 2 === 0) {
        first = prod.slice(0, prod.length / 2).split("").join();
        last = prod.slice(prod.length / 2).split("").reverse().join();
        if (first === last) {
          result = prod;
        }
      }
    }
  }
  return result;
};

console.log(palindromer());
