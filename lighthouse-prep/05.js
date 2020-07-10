const urlEncode = function (text) {
  // Put your solution here
  const trimmed = text.trimStart().trimEnd();
  return trimmed.split(' ').join('%20')
};

console.log(urlEncode("Lighthouse Labs")); // Lighthouse%20Labs
console.log(urlEncode(" Lighthouse Labs ")); // Lighthouse%20Labs
console.log(urlEncode("blue is greener than purple for sure")); // blue%20is%20greener%20than%20purple%20for%20sure
