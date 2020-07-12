const urlDecode = function (text) {
  // Put your solution here
  let temp = text.split("&");

  const result = temp.reduce((acc, el) => {
    el = el.split("=");
    el[1] = el[1].split("%20").join(" ");
    acc[el[0]] = el[1];

    return acc;
  }, {});
  return result;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

/*
Expected Output
{duck: "rubber"}
{bootcamp: "Lighthouse Labs"}
{city: "Vancouver", weather: "lots of rain"}
"lots of rain"
*/
