// create and save player robot's name, computer robot's name 
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerHealth, playerAttack, playerMoney);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyName, enemyHealth, enemyAttack);

var fight = function() {
// alert player that the round is starting
    window.alert("Welcome to Robot Gladiators!");

// give player option to fight
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to chose.");

// if player decides to fight:
if (promptFight === "fight" || promptFight === "FIGHT") {    
    // fight begins
    // subtract the value of 'playerAttack' from the var value of 'enemyHealth'
        enemyHealth = enemyHealth - playerAttack;

    // log resulting message to the console so we know it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // subtract the value of 'enemyAttack from the var value of 'playerHealth'
        playerHealth = playerHealth - enemyAttack;

    // log resulting message to the console so we know it worked.
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining." 
        );

    // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
     }
    }
// if player choses to skip
else if (promptFight === "skip" || promptFight === "SKIP") {

// confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you want to quit? You will lose 2 credits.");

// if yes, leave fight, deduct credit
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye.");
        playerMoney = playerMoney - 2;
    }

// if no, run fight prompt again
else {
        fight();
    }
}
// if player enters invalid input
else {window.alert("You need to choose a valid option. Try again!");
}
console.log(playerName, playerHealth, playerAttack, playerMoney);
}

fight()