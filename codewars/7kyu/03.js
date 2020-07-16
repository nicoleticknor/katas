// max diff -easy

/*
You must implement a function maxDiff that return the difference between the biggest and the smallest value in a list(lst) received as parameter.

The list(lst) contains integers, that means it may contain some negative numbers.

If the list is empty or contains a single element, return 0.

The list(lst) is not sorted.
*/

function maxDiff(list) {
  if (list.length === 0 || list.length === 1) return 0;
  return Math.max(...list) - Math.min(...list);
}

console.log(maxDiff([0, 1, 2, 3, 4, 5, 6])); // 6
console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6])); // 11
console.log(maxDiff([0, 1, 2, 3, 4, 5, 16])); // 16
console.log(maxDiff([16])); // 0
console.log(maxDiff([])); // 0
