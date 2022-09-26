//install inquirer via running command 'npm install inquirer@8.2.4'
const inquirer = require('inquirer');
const Enemy = require('./Enemy.js');
const Player = require('./Player.js');

//create constructor function
function Game() {
    //create constructor functions objects  
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;
}

Game.prototype.initializeGame = function() {
    //create enemies for enemies array 
    this.enemies.push(new Enemy('Goblin', 'Sword'));
    this.enemies.push(new Enemy('Orc', 'baseball bat'));
    this.enemies.push(new Enemy('Skeleton', 'Axe'));
    //set first enemy to first enemy in enemies array 
    this.currentEnemy = this.enemies[0];

    inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: "What's your name?"
        })
        //destruct name from prompt object 
        //ALWAYS USE ARROW FUNCTIONS FOR INQUIRER PACKAGE CALLBACKS 
        .then(({name}) => {
            this.player = new Player(name);

            this.startNewBattle();
        });
}

Game.prototype.startNewBattle = function() {
    //checks for who has more agility - if player does, they start the fight 
    if (this.player.agility > this.currentEnemy.agility) {
        this.isPlayerTurn = true;
    } else {
        this.isPlayerTurn = false;
    }

    console.log('Your stats are as follows:');
    //calls the getStats function from the player method 
    console.table(this.player.getStats());

    //calls the getDescription prototype for the currentEnemy, who is defined via the enemies array 
    console.log(this.currentEnemy.getDescription());

    this.battle();
};

//don't need to run tests because it is using previously tested methods
Game.prototype.battle = function() {
    if (this.isPlayerTurn) {
        //ask the player to choose an action 
        inquirer
            .prompt({
                type: 'list',
                name: 'action',
                choices: ['Attack', 'Use Potion']
            })
            .then (({ action }) => {
                if (action === 'Use Potion') {
                    inquirer 
                        .prompt({
                            type: 'list',
                            name: 'action', 
                            message: 'Which potion would you like to use?',
                            choices: [/*potions go here*/]
                        });
                };
            });
        } else {
        //calls getAttackValue from enemy prototype
        const damage = this.currentEnemy.getAttackValue();
        //calls reduceHealth method from player prototype; feeds in damage as parameter
        this.player.reduceHealth(damage);
        
        console.log(`You were attacked by ${this.currentEnemy.name}`);
        console.log(this.player.getHealth());
    };
};

module.exports = Game;