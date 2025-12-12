var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Clubstep",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 400, y: groundY- 30, damage: 10, hzSize : 20 , image : "img/spikes.png" ,offsetX : -25, offsetY : -30, scaleX : 0.08, scaleY : 0.08, rotation : 0}, //all settings and customizations made for the different parameters in the loop for the objects.
          { type: "obstacle", x: 600, y: groundY- 20, damage: 20, hzSize : 20 , image : "img/detailedspike.png.png" ,offsetX : -15, offsetY : -30, scaleX : 0.3, scaleY : 0.3, rotation : 0}, //all settings and customizations made for the different parameters in the loop for the objects.
          { type: "obstacle", x: 900, y: groundY- 10, damage: 30, hzSize : 20 , image : "img/corrupted.png" ,offsetX : -25, offsetY : -30, scaleX : 0.08, scaleY :0.08, rotation : 0}, //all settings and customizations made for the different parameters in the loop for the objects.
          { type: "enemy", x: 300, y: groundY - 69, damage: -10, velocityX : 1.5, image: "img/easydemon.png", score : 100, offsetX : -25, offsetY : -30, hzSize : 25, scaleX : 0.3, scaleY : 0.4,}, //all settings and customizations made for the different parameters in the loop for the enemies.
          { type: "enemy", x: 400, y: groundY - 69, damage : -20, velocityX : 1.5, image: "img/mediumdemon.png", score : 100, offsetX : -25, offsetY : -30, hzSize : 25, scaleX : 0.3, scaleY : 0.4,}, //all settings and customizations made for the different parameters in the loop for the enemies.
          { type: "enemy", x: 700, y: groundY - 69, damage : -10, velocityX : 1.5, image: "img/easydemon.png", score : 100, offsetX : -25, offsetY : -30, hzSize : 25, scaleX : 0.3, scaleY : 0.4,}, //all settings and customizations made for the different parameters in the loop for the enemies.
          { type: "reward", x: 750, y: groundY - 69, increaseHealth : 10, velocityX : 1.3, image : "img/coin.png" , offsetX : -25, offsetY : -30, hzSize : 25, scaleX: 0.3, scaleY : 0.4}, //all settings and customizations made for the different parameters in the loop for the rewards.
          { type: "reward", x: 900, y: groundY - 69, increaseHealth : 30, velocityX : 1.3, image : "img/goldcoin.png" , offsetX : -25, offsetY : -30, hzSize : 25, scaleX: 0.3, scaleY : 0.4}, //all settings and customizations made for the different parameters in the loop for the rewards.     
          { type: "reward", x: 1100, y: groundY - 69, increaseHealth : 10, velocityX : 1.3, image : "img/coin.png" , offsetX : -25, offsetY : -30, hzSize : 25, scaleX: 0.3, scaleY : 0.4}, //all settings and customizations made for the different parameters in the loop for the rewards.
          { type: "levelMarker", x: 1400, y: groundY - 100, increaseHealth : 10, velocityX : 1.5, image : "img/STAR.png" , offsetX : -25, offsetY : -30, hzSize : 25, scaleX: 0.3, scaleY : 0.4}, //all settings and customizations made for the different parameters in the loop for the levelMarker.

        
          
        ],
      },
      {
        name: "Theory of Everything II",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 300, y: groundY- 30, damage: -10, hzSize : 20 , image : "img/detailedspike.png.png" ,offsetX : -15, offsetY : -30, scaleX : 0.4, scaleY : 0.4, rotation : 0}, //all settings and customizations made for the different parameters in the loop for the objects.
          { type: "obstacle", x: 500, y: groundY- 10, damage: -20, hzSize : 20 , image : "img/corrupted.png" ,offsetX : -25, offsetY : -30, scaleX : 0.08, scaleY : 0.08, rotation : 0}, //all settings and customizations made for the different parameters in the loop for the objects.
          { type: "obstacle", x: 800, y: groundY- 30, damage: -30, hzSize : 20 , image : "img/detailedspike.png.png" ,offsetX : -15, offsetY : -30, scaleX : 0.4, scaleY : 0.4, rotation : 0}, //all settings and customizations made for the different parameters in the loop for the objects.
          { type: "enemy", x: 800, y: groundY - 69, damage : -20 , velocityX : 1.5, image: "img/mediumdemon.png", score : 100, offsetX : -25, offsetY : -30, hzSize : 25, scaleX : 0.3, scaleY : 0.4,}, //all settings and customizations made for the different parameters in the loop for the enemies.
          { type: "enemy", x: 400, y: groundY - 69, damage : -40, velocityX : 1.5, image: "img/harddemon.png", score : 100, offsetX : -25, offsetY : -30, hzSize : 25, scaleX : 0.3, scaleY : 0.4,}, //all settings and customizations made for the different parameters in the loop for the enemies.
          { type: "enemy", x: 600, y: groundY - 69, damage : -20, velocityX : 1.5, image: "img/mediumdemon.png", score : 100, offsetX : -25, offsetY : -30, hzSize : 25, scaleX : 0.3, scaleY : 0.4,}, //all settings and customizations made for the different parameters in the loop for the enemies.
          { type: "reward", x: 900, y: groundY - 69, increaseHealth : 10, velocityX : 1.5, image : "img/goldcoin.png" , offsetX : -25, offsetY : -30, hzSize : 25, scaleX: 0.3, scaleY : 0.4}, //all settings and customizations made for the different parameters in the loop for the rewards.
          { type: "reward", x: 1300, y: groundY - 69, increaseHealth : 50, velocityX : 1.5, image : "img/gem.png" , offsetX : -25, offsetY : -30, hzSize : 25, scaleX: 0.3, scaleY : 0.4},  //all settings and customizations made for the different parameters in the loop for the rewards.   
          { type: "reward", x: 1100, y: groundY - 69, increaseHealth : 10, velocityX : 1.5, image : "img/goldcoin.png" , offsetX : -25, offsetY : -30, hzSize : 25, scaleX: 0.3, scaleY : 0.4}, //all settings and customizations made for the different parameters in the loop for the rewards.
          ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
