var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    
  
    function createObstacle(x, y, damage){
      var hitZoneSize = 25; //size of obstacle collision area
      var damageFromObstacle = 10; //amount of damage the obstacle deals upon collison
      var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates the obstacle and gives it a hitzone and damage (attaches to it)
      obstacleHitZone.x = x; // creates x position for the sawblade hitzone
      obstacleHitZone.y = y; // creates y position for the sawblade hitzone
      game.addGameItem(obstacleHitZone); //adds obstacle to the game 
      var obstacleImage = draw.bitmap("img/sawblade.png"); //adds a bitmap and stores it to obstacle image
      obstacleHitZone.addChild(obstacleImage) //takes obstacle image and adds it as a child to that hitzone (attaches together)
      obstacleImage.x = -25; //offsets images horizontally relative to the hitzone 
      obstacleImage.y = -25; // offsets images vertically relative to the hitzone

      obstacleHitZone.rotationalVelocity = 5;

    }

    createObstacle(400, groundY - 110, 10);
    createObstacle(600, groundY - 20, 20);
    createObstacle(800, groundY - 110, 30);

    var enemy = game.createGameItem("enemy", 25);
    var redSquare = draw.rect(50, 50, "red");
    redSquare.x = -25;
    redSquare.y = -25;
    enemy.addChild(redSquare);
    enemy.x = 400;
    enemy.y = groundY - 50;
    game.addGameItem(enemy);

    enemy.velocityX -= 3;
    
    enemy.onPlayerCollision = function(){
      game.changeIntegrety(-10);
    };

    enemy.onProjectileCollision = function(){
      game.IncreaseScore(100);
      enemy.fadeOut();
    };


    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
