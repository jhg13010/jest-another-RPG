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

module.exports = Game;