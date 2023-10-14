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

console.log(oldScrabbleScorer(initialPrompt()));


let simpleScorer;
const simpleScorerPoints = {
   1: [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'],
}
function simpleScore(word){
   word = word.toUpperCase();
	let letterPoints = word.length;
 
	return letterPoints;
};
console.log(simpleScore(initialPrompt()));

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

 console.log(vowelBonusScore(initialPrompt()));

let scrabbleScorer;
scrabbleScorer = oldScrabbleScorer()

const scoringAlgorithms = [ simpleScoreObj, BonusVowelsObj, scrabbleObj];
let simpleScoreObj = {

   "Name" : "Simple Score",
   "Description" : "Each letter worth 1 point", 
   "Score Function" : simpleScore(),

}

let BonusVowelsObj = {
   
   "Name" : "Bonus Vowels",
   "Description" :"Vowels are 3 pts, consonants are 1 pt.",
   "Score Function" : vowelBonusScore(),

}

let scrabbleObj = {

   "Name" : "Scrabble",
   "Description" : "The traditional scoring algorithm.",
   "Score Function" : scrabbleScorer,

}

function scorerPrompt(scoringAlgorithms) {




}

function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   
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
