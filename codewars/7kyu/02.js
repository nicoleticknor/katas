// simple remove duplicates

/*
In this Kata, you will remove the left-most duplicates from a list of integers and return the result.
*/

function solve(arr) {
  //..
  arr = arr.reverse();
  let result = arr.reduce((acc, item) => {
    if (!acc.includes(item)) acc.push(item);
    return acc;
  }, []);
  console.log(result.reverse());
  return result.reverse();
}

solve([3, 4, 4, 3, 6, 3]); // [4,6,3]
solve([1, 2, 1, 2, 1, 2, 3]); // [1,2,3]
solve([1, 2, 3, 4]); // [1,2,3,4]
solve([1, 1, 4, 5, 1, 2, 1]); // [4,5,2,1]
solve([1, 2, 1, 2, 1, 1, 3]); // [2,1,3]
