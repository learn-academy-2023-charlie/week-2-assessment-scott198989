// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Charlie 2023"
// console.log(cohort.split(""))

// a) Your answer: The output will be Charlie 2023 split into individual strings.
// b) Verify and explain: This is correct because the .split accesssor will look to seperate the string, and the ("") tells the method to iterate over the string and return individual indexes of values.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(("LEARN Student"))

// a) Your answer: it will return LEARN Student
// b) Verify and explain: I think the intended response was Hello, LEARN Student but because the function greeter has no return and the only thing being executed in the console.log is "LEARN Student" that is what is returned.  If you wanted to complete this function and return "Hello, LEARN Student!" it would look like this 
// const greeter = (name) => {
  //  return `Hello, ${name}!`
  // }
  // console.log(greeter("LEARN Student"));

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: an array with each value multiplied by two.
// b) Verify and explain: We have an array of numbers called multipliedByTwo.  Using the .map method will iterate through the array, and we are saying anytime we iterate over a parameter of number multiply that by two.  

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: will return only odd numbers
// b) Verify and explain: using the .filter will iterate through the array and return an array that satisfies the stated condition condition.  The stated condition in this case is saying only return a number if the value and type are true if two divides into a number with a remainder and has a remainder.  Since this is true, 11,13, and 15 are returned.  

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: Javascript
// b) Verify and explain: when using the console log you are calling on the object myCodingSkills, referencing the key (languages) and the zero index of the value (JavaScript).

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Charlie"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: Learn {student: George cohort: Charlie year: 2023}
// b) Verify and explain: In tbis class you are giving the constructor a parameter of name.  The key:value this.name is referencing the object and a parameter value.  When creating the new class we are passing in the string "Geroge" as a parameter so when LearnStudent is called on all data is given.  If we left out "George" and console.log it name would appear as student: undefined.
