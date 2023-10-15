// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
   word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt(word) {
   word= "";
   console.log("Let's play some scrabble! ");
      word = input.question("Enter a word: "); 
      return word; 
};




let simpleScorer;
const simpleScorerPoints = {
   1: [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'],
}
function simpleScore(word){
   word = word.toUpperCase();
	let letterPoints = word.length;
 
	return letterPoints;
};


let vowelBonusScorer;

const vowelBonusPoints ={
   1: [ 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'],
   3: [ 'A', 'E', 'I', 'O', 'U']
}
function vowelBonusScore(word){
   word = word.toUpperCase();
   let letterPoints = [];
   let sum = 0

   for (let i = 0; i < word.length; i++) {
 
      for (const pointValue in vowelBonusPoints) {
  
         if (vowelBonusPoints[pointValue].includes(word[i])) {
            letterPoints.push(pointValue);

            let letterPointsNum = parseInt(letterPoints[i]);
            
            sum += letterPointsNum;
            
         }
  
      }
    }
    return sum;
 };



let scrabbleScorer;


const scoringAlgorithms = [
{
   name: "Simple Score",
   description : "Each letter worth 1 point", 
   scoreFunction : simpleScore,
},
{
   name: "Bonus Vowels",
   description:"Vowels are 3 pts, consonants are 1 pt.",
   scoreFunction: vowelBonusScore,
},
{
   name: "Scrabble Score",
   description: "The traditional scoring algorithm.",
   scoreFunction: scrabbleScorer,
},
];

function scorerPrompt(scoringAlgorithms)  {

   console.log("What scoring method would you like to use?");
   console.log("0: Simple Score- Each letter worth 1 point.");
   console.log("1: Bonus Vowels- Vowels are 3 pts, consonants are 1 pt.");
   console.log("2: Scrabble Score- The traditional scoring algorithm.");
   method = input.question("Enter 0, 1, or 2: ");
   for ( let i = 0; i < scoringAlgorithms.length; i ++){
   `you chose: ${method}, your score is ${scoringAlgorithms[i]}`;
 };
  };


function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   scorerPrompt();
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
