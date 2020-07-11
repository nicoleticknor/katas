const camelCase = function (input) {
  // Your code here
  let result = input.split(' ')
  for (let x = 1; x < result.length; x++) {
    result[x] = result[x].charAt(0).toUpperCase() + result[x].slice(1)
  }
  return result.join('');
};

console.log(camelCase("this is a string")); // thisIsAString
console.log(camelCase("loopy lighthouse")); // loopyLighthouse
console.log(camelCase("supercalifragalisticexpialidocious")); // supercalifragalisticexpialidocious
