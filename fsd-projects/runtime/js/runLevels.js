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
    game.setDebugMode(false);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    
  
    function createObstacle(x, y, damage, hzSize, image, offsetX, offsetY, scaleX, scaleY, rotation){
      var hitZoneSize = hzSize; //size of obstacle collision area
      var damageFromObstacle = damage; //amount of damage the obstacle deals upon collison
      var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates the obstacle and gives it a hitzone and damage (attaches to it)
      obstacleHitZone.x = x; // creates x position for the sawblade hitzone
      obstacleHitZone.y = y; // creates y position for the sawblade hitzone
      game.addGameItem(obstacleHitZone); //adds obstacle to the game 
      var obstacleImage = draw.bitmap(image); //adds a bitmap and stores it to obstacle image
      obstacleHitZone.addChild(obstacleImage) //takes obstacle image and adds it as a child to that hitzone (attaches together)
      obstacleImage.x = offsetX; //offsets images horizontally relative to the hitzone 
      obstacleImage.y = offsetY; // offsets images vertically relative to the hitzone
      obstacleImage.scaleX = scaleX;
      obstacleImage.scaleY = scaleY;

      obstacleHitZone.rotationalVelocity = rotation; //moving your obstacle/animation enemy across screen

    }



    

    function createEnemy(x, y, damage, velocityX, image, score, offsetX, offsetY, hzSize, scaleX, scaleY){   //(x, y, damage, velocityX, image, score, offsetX, offsetY, hzSiz
      var enemy = game.createGameItem("enemy", hzSize); //stores enemy in the enemy variable and creates it in the game
      var enemyImage = draw.bitmap(image); //stores the enemy image
      enemyImage.x = offsetX; //horizontal offset to the image to the hitzone
      enemyImage.y = offsetY; //vertical offset to the image to the hitzone
      enemy.addChild(enemyImage); //takes enemy image and adds it as a child to that hitzone (attaches together)
      enemy.x = x; //  (setting x position)
      enemy.y = y; //  (setting y position)
      game.addGameItem(enemy); //adds enemy to the game
      enemyImage.scaleX = scaleX;
      enemyImage.scaleY = scaleY;

      enemy.velocityX -= velocityX; //moving your enemy/animation enemy across screen
      
      //handles when hallebot collides with enemy
      enemy.onPlayerCollision = function(){
        game.changeIntegrity(damage); //reduces player health 
      };

    //handles when hallebot shoots the enemy
      enemy.onProjectileCollision = function(){
        game.increaseScore(score); //increases the player's score when halle shoots the enemy
        //On projectile collision, shrinks/fadeOut/flyTo enemy image
        //enemy.fadeOut();
        //enemy.shrink();
        enemy.fadeOut();
      };
    }

    
    function createReward(x, y, increaseHealth, velocityX, image, offsetX, offsetY, hzSize, scaleX, scaleY){ //(x, y, increaseHealth, velocityX, image, offsetX, offsetY, hzSize)
      var reward = game.createGameItem("enemy", hzSize); //stores reward in the enemy variable and creates it in the game
      var rewardImage = draw.bitmap(image); //stores the reward image
      rewardImage.x = offsetX; //horizontal offset to the image to the hitzone
      rewardImage.y = offsetY; //vertical offset to the image to the hitzone
      reward.addChild(rewardImage); //takes reward image and adds it as a child to that hitzone (attaches together)
      reward.x = x; //  (setting x position)
      reward.y = y; //  (setting y position)
      game.addGameItem(reward); //adds reward to the game
      rewardImage.scaleX = scaleX;
      rewardImage.scaleY= scaleY;

      reward.velocityX -= velocityX; //moving your reward/animation enemy across screen
      
      //handles when hallebot collides with reward
      reward.onPlayerCollision = function(){
        game.changeIntegrity(increaseHealth); //increases player health 
        reward.fadeOut();
      };
    }

    function createLevelMarker(x, y, increaseHealth, velocityX, image, offsetX, offsetY, hzSize, scaleX, scaleY){ ////(x, y, increaseHealth, velocityX, image, offsetX, offsetY, hzSize)
      var levelMarker = game.createGameItem("level", hzSize); //stores levelMarker in the enemy variable and creates it in the game
      var levelImage = draw.bitmap(image); //stores the levelMarker image
      levelImage.x = offsetX; //horizontal offset to the image to the hitzone
      levelImage.y = offsetY; //vertical offset to the image to the hitzone
      levelMarker.addChild(levelImage); //takes levelMarker image and adds it as a child to that hitzone (attaches together)
      levelMarker.x = x; //  (setting x position)
      levelMarker.y = y; //  (setting y position)
      game.addGameItem(levelMarker); //adds levelMarker to the game
      levelImage.scaleX = scaleX;
      levelImage.scaleY = scaleY;

      levelMarker.velocityX -= velocityX; //moving your levelMarker/animation enemy across screen
      
      //handles when hallebot collides with levelMarker
      levelMarker.onPlayerCollision = function(){
        game.changeIntegrity(increaseHealth); //increases player health 
        levelMarker.fadeOut();
        startLevel();
      };
    }


    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel]; //fetches the current level from the level data array and stores it inside of our level variable
      var levelObjects = level.gameItems; //retrieves the array of gameItems and stores it in the level objects

      for(var i = 0;i < levelObjects.length; i++){ //loop used for the level objects in the code, manages them.
          var element = levelObjects[i];

        if(element.type === "obstacle"){ //stores all parameters used in obstacle
          createObstacle(element.x, element.y, element.damage, element.hzSize, element.image, element.offsetX, element.offsetY, element.scaleX, element.scaleY, element.rotation);
        }
        if(element.type === "enemy"){ //stores all parameters used in enemy
          createEnemy(element.x, element.y, element.damage, element.velocityX, element.image, element.score, element.offsetX, element.offsetY, element.hzSize, element.scaleX, element.scaleY);
        }
        if(element.type === "reward"){ //stores all parameters used in reward
          createReward(element.x, element.y, element.increaseHealth, element.velocityX, element.image, element.offsetX, element.offsetY, element.hzSize, element.scaleX, element.scaleY);
        }
         if(element.type === "levelMarker"){ //stores all parameters used in levelMarker
          createLevelMarker(element.x, element.y, element.increaseHealth, element.velocityX, element.image, element.offsetX, element.offsetY, element.hzSize, element.scaleX, element.scaleY)
          //(x, y, increaseHealth, velocityX, image, offsetX, offsetY, hzSize)
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
