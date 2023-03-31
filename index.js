function isPalindrome(word) {
  // Write your algorithm here
  let replaceSpecialChars = /[\W_]/g;
  let lowerCaseWord = word.toLowerCase()
  //replace any special characters or space
  lowerCaseWord.replace(replaceSpecialChars, '')

  //split, reverse and join the word
  let reversedWord = lowerCaseWord.split('').reverse().join('')

  //check if the reversed word is equal to the original word...using strict equality operator
  return reversedWord === lowerCaseWord;
}

/* 
  Add your pseudocode here
  *convert word to lower case using .lowerCase()
  *replace any special characters or space
  *split the characters into an array
  *reverse the split string
  *join the reversed string
  *return true if the joined string equals the lower cased string
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("neveroddoreven"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("MOm"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("nope"));

}

module.exports = isPalindrome;
