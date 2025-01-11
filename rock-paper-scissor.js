// example.js
const args = process.argv.slice(2);
console.log(args);

const options = ["rock", "paper", "scissor"];

// Check if players input is a single value; if not log message
if (args.length !== 1) {
    console.error("Pleaser enter just one option!");
    return;
}
// Check if players input is "rock", "paper" or "scissor"; if not log message
if (!args.includes("rock", "paper", "scissor")) {
    console.error("Pleaser enter rock, paper or scissor!");
    return;
}
// Spellcheck? Handle upper and lower case inputs

// System randomly selects a value from options: "rock", "paper" or "scissor"

// Compare players input with systems value

// Define the rules for winning/loosing

// Output the result
