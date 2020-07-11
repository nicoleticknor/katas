const checkAir = function (samples, threshold) {
  // Code here!
  const analysis = samples.reduce((acc, sample) => {
    if (sample === 'dirty') {
      acc += 0.1
    }
    return acc;
  }, 0)

  if (analysis > threshold) {
    return 'Polluted'
  } else return 'Clean'
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
)); // Polluted

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
)); // Polluted

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))  // Clean
