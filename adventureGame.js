const readline = require("readline-sync");
let playerName = "Hug";
// Get player name using readline-sync

// Display the game title
console.log("Welcome to the Adventure Game!");

// Add a welcome message
console.log("Prepare yourself for an epic journey!");

// Create variables for player stats
let playerHealth = 30;
let playerGold = 20;
let currentLocation = "Village";
let gameRunning = true;
let inventory = [];

// Display welcome message and starting stats
readline.question("What is your name?");
console.log("Welcome!" + playerName);
console.log("playerGold: " + playerGold);