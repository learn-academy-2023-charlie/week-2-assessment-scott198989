// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// Pseudo code:

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// Pseudo code:
// Input: Given objects with numbers 
// Output : the number inside the arguement is evenly divisible by 3 or not
// Create a test with expect statements for each of the variables provided.
// // Process : Create a function called evenThree that will call an object as an arguement, add the string `is divisible by`, use modulo operand for division and set 3 strictly equal to a remainder of 0.
// Creat a test that will producted good failure in jest

// const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
// const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
// const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// Create a test in Jest seeing the test have good failure because the function is undefined

describe(`evenThree`,  () => {
  it(`should return a string indicating if the number is divisible by three or not`, () => {
    expect(evenThree(object1)).toEqual("15 is divisible by three");
    expect(evenThree(object2)).toEqual("0 is divisible by three");
    expect(evenThree(object3)).toEqual("-7 is not divisible by three");
  })
})


// Function returns undefined 

//  Output :  FAIL  ./code-challenges.test.js
//   evenThree
//   ✕ if the number inside the object is evenly divisible by three (1 ms)

// ● evenThree › if the number inside the object is evenly divisible by three

//   ReferenceError: evenThree is not defined

// class Divide {
//   constructor(number) {
//     this.number = number;
//   }

//   answer() {
//     return this.number % 3 === 0;
//   }
// }

// const object1 = new Divide(15);
// const object2 = new Divide(0);
// const object3 = new Divide(-7);

// const evenThree = (obj) => {
  
// };

// b) Create the function that makes the test pass.

// Make the test pass by completing the function
//  PASS  ./code-challenges.test.js
//   evenThree

class Divide {
    constructor(number) {
      this.number = number;
    }
  
    answer() {
      return this.number % 3 === 0;
    }
  }
  
  const object1 = new Divide(15);
  const object2 = new Divide(0);
  const object3 = new Divide(-7);
  
  const evenThree = (obj) => {
    if (obj.answer()) {
      return `${obj.number} is divisible by three`;
    } else {
      return `${obj.number} is not divisible by three`;
    }
  };
  

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// Pseudo code:
// input: an array of words
// output: a single array with all words from both original arrays capitalized
// process: Create a function that takes an array as a parameter.  Set the function up to concat both given arrays into one single array. Will need to create another constand to facilitate the array merger
//create another const that will iterate over the entire array using the .map method beginning at the 0 index using charAt, then by using word.toUpperCase to go through the entire array by not indicating a starting index and using .splice to return at the beginning of the array and slice to start at the beginning array and leaving the parenthisis blank to return the last index of the array

// a) Create a test with expect statements for each of the variables provided.


describe("capitalizeWords", () => {
  it("should capitalize all words in the array", () => {
    const result = capitalizeWords(randomNouns1.concat(randomNouns2));
    expect(result).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database", "Chopsticks", "Mango"]);
  });
});


// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]

// const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]

// Good failure
// FAIL  ./code-challenges.test.js
// evenThree
//   ✓ should return a string indicating if the number is divisible by three or not (2 ms)
// capitalizeArr1
//   ✕ takes in an array of strings named randomNoms and returns and array with all values capitolized
// indexVowels
//   ✓ takes in a string and logs the index of the first vowel

// ● capitalizeArr1 › takes in an array of strings named randomNoms and returns and array with all values capitolized

//   ReferenceError: capitalizeWords is not defined





const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// Write the code and see the test pass

// PASS  ./code-challenges.test.js
// evenThree
//   ✓ should return a string indicating if the number is divisible by three or not (2 ms)
// capitalizeWords
//   ✓ should capitalize all words in the array
// indexVowels
//   ✓ takes in a string and logs the index of the first vowel (1 ms)
const capitalizeWords = (arr) => {
  const joinedArr = randomNouns1.concat(randomNouns2);
  const result = joinedArr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return result;
}


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// Pseudo code:
//input: takes in a string 
// output: logs the index of the first vowel
// process: First I will need to creat my jest test statement that will create good failure by returning the function as undefined.  I can do this by running the jest test with out having the function written out. To make this test pass I will create a function named indexVowels that takes in an arguement of strings (str) as a parameter.  Next I will declare a array with all the vowels as seperate strings "a", "e", "i", "o", "u".  I will need a for loop to iterate over each string in the array by using the .length method and it will iterate to the next value up one by the i++. I will set up my conditional if statement to return the first indexed vowel by using .includes to check and see.  Finally, my catch all will be to return the -1 index if there are no vowels in any of the variables because if I left it at just return i it would only return the length of the string

// a) Create a test with expect statements for each of the variables provided.

//  FAIL  ./code-challenges.test.js
//   evenThree
//     ✓ should return a string indicating if the number is divisible by three or not (1 ms)
//   capitalizeWords
//     ✓ should capitalize all words in the array
//   indexVowels
//     ✕ takes in a string and logs the index of the first vowel

//   ● indexVowels › takes in a string and logs the index of the first vowel

//     ReferenceError: indexVowels is not defined

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.

describe("indexVowels", () => {
  it("takes in a string and logs the index of the first vowel" , () => {
    expect(indexVowels(vowelTester1)).toEqual(1);
    expect(indexVowels(vowelTester2)).toEqual(0);
    expect(indexVowels(vowelTester3)).toEqual(2)
  })
})
// PASS  ./code-challenges.test.js
// evenThree
//   ✓ should return a string indicating if the number is divisible by three or not (1 ms)
// capitalizeWords
//   ✓ should capitalize all words in the array (1 ms)
// indexVowels
//   ✓ takes in a string and logs the index of the first vowel

const indexVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      return i;
    }
  }
  return -1;
}

