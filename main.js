const searchEmojis = require("./emagi-search.js");
const convertWords = require("./emagify.js");
const randomEmojis = require("./emagi-random.js");
const symbols = require("./emagi-symbols.js");

const search = process.argv[2] === "search";
const userWord = process.argv[3];
const fourthWord = process.argv[4];

const convert = process.argv[2] === "convert";
const userText = process.argv.slice(3);

const random = process.argv[2] === "random";

let result = "";

if (
  (search && fourthWord) ||
  (random && userWord) 
//   (convert && fourthWord)
) {
  result = `input the word/s in correct format`;
} else if (search && userWord) {
  result = searchEmojis(userWord).join(" ");
} else if (convert && userText) {
  result = convertWords(userText).join(" ");
} else if (random) {
  result = randomEmojis(symbols);
}

console.log(result);
