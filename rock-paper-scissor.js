// example.js
const args = process.argv.slice(2);
const options = ["rock", "paper", "scissor"];
const playerMove = args[0].trim().toLowerCase();

// Check if players input is a single value; if not log message
if (args.length !== 1) {
    console.error("Pleaser enter just one option!");
    return;
}
// Check if players input is "rock", "paper" or "scissor"; if not log message

if (!options.includes(playerMove)) {
    console.error("Pleaser enter rock, paper or scissor!");
    return;
}

// System randomly selects a value from options: "rock", "paper" or "scissor"
const randomOption = (options) =>
    options[Math.floor(Math.random() * options.length)];
const computerMove = randomOption(options);

// Compare players input with systems value & Define the rules for winning/loosing
if (playerMove === computerMove) {
    console.log("It is a tie! Great minds think alike.");
} else if (playerMove === "rock" && computerMove === "scissors") {
    console.log("You crushed it! The computer had no chance.");
} else if (playerMove === "paper" && computerMove === "rock") {
    console.log("You crushed it! The computer had no chance.");
} else if (playerMove === "scissor" && computerMove === "paper") {
    console.log("You crushed it! The computer had no chance.");
} else {
    console.log("Ouch! The computer wins this one.");
}

// Output the result
console.log(`Your input: ${args} / Computers input: ${computerMove}`);
