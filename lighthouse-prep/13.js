const makeCase = function (input, type) {
  let result = input;

  const caser = (style) => {
    switch (style) {
      case "upper":
        return result.toUpperCase();
      case "camel":
        result = result.split(" ");
        for (let x = 1; x < result.length; x++) {
          result[x] = result[x].charAt(0).toUpperCase() + result[x].slice(1);
        }
        return result.join("");
      case "pascal":
        result = result.split(" ");
        for (let x = 0; x < result.length; x++) {
          result[x] = result[x].charAt(0).toUpperCase() + result[x].slice(1);
        }
        return result.join("");
      case "snake":
        return result.split(" ").join("_");
      case "kebab":
        return result.split(" ").join("-");
      case "title":
        result = result.split(" ");
        for (let x = 0; x < result.length; x++) {
          result[x] = result[x].charAt(0).toUpperCase() + result[x].slice(1);
        }
        return result.join(" ");
      case "vowel":
        result = result.split(" ");
        result = result.join(" ");
        return result.replace(/[aeiou]/g, function (v) {
          return v.toUpperCase();
        });
      case "consonant":
        result = result.split(" ");
        result = result.join(" ").toUpperCase();
        return result.replace(/[AEIOU]/g, function (v) {
          return v.toLowerCase();
        });
      default:
    }
  };

  if (Array.isArray(type)) {
    for (let i = 0; i < type.length; i++) {
      result = caser(type[i]);
    }
    return result;
  }

  return caser(type);
};

console.log(makeCase("this is a string", "camel")); // thisIsAString
console.log(makeCase("this is a string", "pascal")); // ThisIsAString
console.log(makeCase("this is a string", "snake")); // this_is_a_string
console.log(makeCase("this is a string", "kebab")); // this-is-a-string
console.log(makeCase("this is a string", "title")); // This Is A String
console.log(makeCase("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCase("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCase("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING

/*
thisIsAString
ThisIsAString
this_is_a_string
this-is-a-string
This Is A String
thIs Is A strIng
THiS iS a STRiNG
THIS_IS_A_STRING
*/
