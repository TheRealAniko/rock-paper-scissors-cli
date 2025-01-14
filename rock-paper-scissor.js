// Extract Command-Line Arguments
const args = process.argv.slice(2);

// Sanitize and Validate Input
const playerInput = args.map((input) => input.trim().toLowerCase());

// Define Game Options
const gameMoves = ["rock", "paper", "scissors"];

// Validate Input
if (playerInput.length === 0) {
    console.error(`No input detected! Please choose your weapon!`);
    return;
}

const validMove = playerInput.filter((move) => gameMoves.includes(move));
const invalidMove = playerInput.filter((move) => !gameMoves.includes(move));

if (validMove.length > 1) {
    console.error(
        `You chose multiple moves: "${validMove}". Please enter "rock", "paper", or "scissors"!`
    );
    return;
}
if (invalidMove.length > 0) {
    console.error(
        `Invalid move: "${invalidMove}". Please enter "rock", "paper", or "scissors"!`
    );
    return;
}
const playerMove = validMove[0];

// Generate Computer Move
const randomMove = (gameMoves) =>
    gameMoves[Math.floor(Math.random() * gameMoves.length)];
const computerMove = randomMove(gameMoves);

// Step 6: Compare Moves
if (playerMove === computerMove) {
    console.log(
        `Your move: ${playerMove}! The computer strikes with: ${computerMove}! It is a tie! Great minds think alike.`
    );
} else if (playerMove === "rock" && computerMove === "scissors") {
    console.log(
        `Your move: ${playerMove}! The computer strikes with: ${computerMove}! You crushed it! The computer had no chance.`
    );
} else if (playerMove === "paper" && computerMove === "rock") {
    console.log(
        `Your move: ${playerMove}! The computer strikes with: ${computerMove}! You crushed it! The computer had no chance.`
    );
} else if (playerMove === "scissors" && computerMove === "paper") {
    console.log(
        `Your move: ${playerMove}! The computer strikes with: ${computerMove}! You crushed it! The computer had no chance.`
    );
} else {
    console.log(
        `Your move: ${playerMove}! The computer strikes with: ${computerMove}! Ouch! The computer wins this one.`
    );
}
