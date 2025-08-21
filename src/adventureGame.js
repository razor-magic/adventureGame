// Get player name using readline-sync
const readline = require("readline-sync");
let playerName = "Hug";

// Display the game title
console.log("Welcome to the Adventure Game!");

// Add a welcome message
console.log("Prepare yourself for an epic journey!");

// Create variables for player stats
let playerHealth = 100;
let playerGold = 20;
let currentLocation = "Village";
let gameRunning = true;
let inventory = [];
