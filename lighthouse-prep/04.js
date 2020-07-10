const instructorWithLongestName = function (instructors) {
  // Put your solution here
  let longest = 0;
  let longestIndex = null;
  instructors.forEach((instructor, i) => {
    if (instructor.name.length > longest) {
      longest = instructor.name.length;
      longestIndex = i;
    }
  })
  return instructors[longestIndex];
};

console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
])); // {name: "Jeremiah", course: "Web"}
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
])); // {name: "Domascus", course: "Web"}
