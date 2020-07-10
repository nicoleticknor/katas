const numberOfVowels = (phrase) => {
  // Put your solution here

  const regex = /[a,e,i,o,u]/g;

  return phrase.match(regex).length;
}

console.log(numberOfVowels("orange")); // 3
console.log(numberOfVowels("lighthouse labs")); // 5
console.log(numberOfVowels("aeiou")); // 5
