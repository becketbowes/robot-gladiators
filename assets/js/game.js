// create and save player robot's name, computer robot's name 
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyName, enemyHealth, enemyAttack);

var fight = function() {
// alert player that the round is starting
    window.alert("Welcome to Robot Gladiators!");

// subtract the value of 'playerAttack' from the var value of 'enemyHealth'
    enemyHealth = enemyHealth - playerAttack;

// log resulting message to the console so we know it worked.
    console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
// subtract the value of 'enemyAttack from the var value of 'playerHealth'
    playerHealth = playerHealth - enemyAttack;

// log resulting message to the console so we know it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining." 
    );

}

fight()