//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// 1
function uppercase(str) {
  //write your code here
  let splittedArr = str.split(" ");
  let newArr = [];

  // console.log(splittedArr);

  for (let i = 0; i < splittedArr.length; i++) {
    newArr.push(
      splittedArr[i].slice(0, 1).toUpperCase() +
        splittedArr[i].slice(1, splittedArr[i].length)
    );
  }

  return newArr.join(" ");
}

console.log(uppercase("the quick brown fox"));

console.log(uppercase("i'm the king of the jungle"));

console.log(uppercase("sjfg jsdfjh jsdfjg"));

// 2
// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
function find_longest_word(str) {
  //write your code here
  const arrOfWords = str.split(" ");
  let longestLetterCount = 0;
  let longestWord;

  for (let i = 0; i < arrOfWords.length; i++) {
    if (arrOfWords[i].length > longestLetterCount) {
      longestLetterCount = arrOfWords[i].length;

      if (arrOfWords[i].length === longestLetterCount) {
        longestWord = arrOfWords[i];
      }
    }
  }

  return longestWord;
}
console.log(
  find_longest_word(
    "jsgfjhghdgfhdgfhdgfhboob Web Development Tutorial jsdgfjdsg"
  )
);

console.log(find_longest_word("Which word is the lonest word"));

// 3
// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
function Longest_Country_Name(country_name) {
  //write your code here
  let longestLetterCount = 0;
  let longestWord;

  for (let i = 0; i < country_name.length; i++) {
    if (country_name[i].length > longestLetterCount) {
      longestLetterCount = country_name[i].length;

      if (country_name[i].length === longestLetterCount) {
        longestWord = country_name[i];
      }
    }
  }

  return longestWord;
}

console.log(
  Longest_Country_Name(["Australia", "Germany", "United States of America"])
);

console.log(
  Longest_Country_Name([
    "The united arab Emirates",
    "Eritrea",
    "The longest country name i have ever",
  ])
);
