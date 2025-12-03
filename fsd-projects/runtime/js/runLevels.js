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

      obstacleHitZone.rotationalVelocity = 5; //moving your obstacle/animation enemy across screen

    }



    

    function createEnemy(x, y){
      var enemy = game.createGameItem("enemy", 25); //stores enemy in the enemy variable and creates it in the game
      var enemyImage = draw.rect(50, 50, "red"); //stores the enemy image
      enemyImage.x = -25; //horizontal offset to the image to the hitzone
      enemyImage.y = -25; //vertical offset to the image to the hitzone
      enemy.addChild(enemyImage); //takes enemy image and adds it as a child to that hitzone (attaches together)
      enemy.x = x; //  (setting x position)
      enemy.y = y; //  (setting y position)
      game.addGameItem(enemy); //adds enemy to the game

      enemy.velocityX -= 3; //moving your enemy/animation enemy across screen
      
      //handles when hallebot collides with enemy
      enemy.onPlayerCollision = function(){
        game.changeIntegrity(-10); //reduces player health 
      };

    //handles when hallebot shoots the enemy
      enemy.onProjectileCollision = function(){
        game.increaseScore(100); //increases the player's score when halle shoots the enemy
        //On projectile collision, shrinks/fadeOut/flyTo enemy image
        //enemy.fadeOut();
        //enemy.shrink();
        enemy.fadeOut();
      };
    }

    createEnemy(400, groundY - 50);
    createEnemy(600, groundY - 50);

    
    function createReward(x, y){
      var reward = game.createGameItem("enemy", 25); //stores reward in the enemy variable and creates it in the game
      var rewardImage = draw.rect(50, 50, "blue"); //stores the reward image
      rewardImage.x = -25; //horizontal offset to the image to the hitzone
      rewardImage.y = -25; //vertical offset to the image to the hitzone
      reward.addChild(rewardImage); //takes reward image and adds it as a child to that hitzone (attaches together)
      reward.x = x; //  (setting x position)
      reward.y = y; //  (setting y position)
      game.addGameItem(reward); //adds reward to the game

      reward.velocityX -= 3; //moving your reward/animation enemy across screen
      
      //handles when hallebot collides with reward
      reward.onPlayerCollision = function(){
        game.changeIntegrity(10); //increases player health 
        reward.fadeOut();
      };
    }

    createReward(700, groundY -100);
    createReward(900, groundY -100);
    createReward(1200, groundY -50);


    function createLevelMarker(x, y){
      var levelMarker = game.createGameItem("level", 25); //stores levelMarker in the enemy variable and creates it in the game
      var levelImage = draw.rect(50, 50, "yellow"); //stores the levelMarker image
      levelImage.x = -25; //horizontal offset to the image to the hitzone
      levelImage.y = -25; //vertical offset to the image to the hitzone
      levelMarker.addChild(levelImage); //takes levelMarker image and adds it as a child to that hitzone (attaches together)
      levelMarker.x = x; //  (setting x position)
      levelMarker.y = y; //  (setting y position)
      game.addGameItem(levelMarker); //adds levelMarker to the game

      levelMarker.velocityX -= 3; //moving your levelMarker/animation enemy across screen
      
      //handles when hallebot collides with levelMarker
      levelMarker.onPlayerCollision = function(){
        game.changeIntegrity(10); //increases player health 
        levelMarker.fadeOut();
        startLevel();
      };
    }

    createLevelMarker(1400, groundY-100);

    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel]; //fetches the current level from the level data array and stores it inside of our level variable
      var levelObjects = level.gameItems; //retrieves the array of gameItems and stores it in the level objects

      for(var i = 0;i < levelObjects.length; i++){
          var element = levelObjects[i];

        if(element.type === "obstacle"){
          createObstacle(element.x, element.y, element.damage);
        }

        if(element.type === "enemy"){
          createEnemy(enemy.x, enemy.y)
        }

      }


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
