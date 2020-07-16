// consecutive strings

/*
You are given an array(list) strarr of strings and an integer k. 
Your task is to return the first longest string consisting of k consecutive strings taken in the array.
*/

function longestConsec(strarr, k) {
  // your code
  let result = "";

  if (strarr.length <= 0 || strarr.length < k) return result;

  const lengths = strarr.map((i) => i.length);

  for (let i = 0; i < k; i++) {
    const max = Math.max(...lengths);
    const maxIndex = lengths.findIndex((e) => e === max);
    result += strarr[maxIndex];
    lengths.splice(maxIndex, 1, 0);
  }

  return result;
}

console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2),
); // "abigailtheta"
console.log(longestConsec(
  [
    "ejjjjmmtthh",
    "zxxuueeg",
    "aanlljrrrxx",
    "dqqqaaabbb",
    "oocccffuucccjjjkkkjyyyeehh",
  ],
  1,
)); // "oocccffuucccjjjkkkjyyyeehh"
console.log(longestConsec([], 3)); // ""
console.log(longestConsec(
  [
    "itvayloxrp",
    "wkppqsztdkmvcuwvereiupccauycnjutlv",
    "vweqilsfytihvrzlaodfixoyxvyuyvgpck",
  ],
  2,
)); // "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
console.log(
  longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2),
); // "wlwsasphmxxowiaxujylentrklctozmymu"
console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2),
); // ""
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3)); // "ixoyx3452zzzzzzzzzzzz"
console.log(
  longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15),
); // ""
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0)); // ""
