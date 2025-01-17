// Extract Command-Line Arguments
const args = process.argv.slice(2);

// Sanitize and Validate Input
// .map iterates through each element and passes it to a function
// that uses the methods .trim (removes spaces) and .toLowerCase (converts the input to lowercase).
const playerInput = args.map((input) => input.trim().toLowerCase());

// Define Game Options
// An array with the possible moves
const gameMoves = ["rock", "paper", "scissors"];

// Validate Input
// Checks if the player entered anything. If the length of the player's input is 0, an error message is displayed.
if (playerInput.length === 0) {
    console.error(`No input detected! Please choose your weapon!`);
    return;
}
// The filter method creates a new array containing only the inputs that match the allowed options defined by gameMoves.
const validMove = playerInput.filter((move) => gameMoves.includes(move));
// The filter method creates a new array containing only the inputs that dont match the allowed options defined by gameMoves.
const invalidMove = playerInput.filter((move) => !gameMoves.includes(move));

// Checks if the player entered more than one move. If so, an error message is displayed.
if (validMove.length > 1) {
    console.error(
        `You chose multiple moves: "${validMove}". Please enter "rock", "paper", or "scissors"!`
    );
    return;
}
// Checks if the player entered any invalid moves. If so, an error message is displayed.
if (invalidMove.length > 0) {
    console.error(
        `Invalid move: "${invalidMove}". Please enter "rock", "paper", or "scissors"!`
    );
    return;
}
// Extracts the first valid move from the validMove array. This ensures the game continues with a single valid player move.
const playerMove = validMove[0];

// Generate the random computer move
// The randomMove function selects a random move from the gameMoves array.
const randomMove = (gameMoves) =>
    gameMoves[Math.floor(Math.random() * gameMoves.length)];
const computerMove = randomMove(gameMoves);

// Compare Moves
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
