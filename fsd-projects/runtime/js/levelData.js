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
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 400, y: groundY- 30, damage: 10, hzSize : 20 , image : "img/spikes.png" ,offsetX : -25, offsetY : -30, scaleX : 0.08, scaleY : 0.08, rotation : 0},
          { type: "obstacle", x: 600, y: groundY- 30, damage: 20, hzSize : 20 , image : "img/spikes.png" ,offsetX : -25, offsetY : -30, scaleX : 0.08, scaleY : 0.08, rotation : 0},
          { type: "obstacle", x: 900, y: groundY- 40, damage: 30, hzSize : 20 , image : "img/spikes.png" ,offsetX : -25, offsetY : -30, scaleX : 0.08, scaleY :0.08, rotation : 0},
          //(x, y, damage, velocityX, image, score, offsetX, offsetY, hzSize)
          { type: "enemy", x: 200, y: groundY - 100, velocityX : 1.5, image: "img/easydemon.png", score : 100, offsetX : -25, offsetY : -10, hzSize : 25, scaleX : 0.5, scaleY : 0.5,}, //image : "img/easydemon.png"
          { type: "enemy", x: 400, y: groundY - 100, velocityX : 1.5, image: "img/easydemon.png", score : 100, offsetX : -25, offsetY : -30, hzSize : 25, scaleX : 0.5, scaleY : 0.5,},
          { type: "enemy", x: 600, y: groundY - 100, velocityX : 1.5, image: "img/easydemon.png", score : 100, offsetX : -25, offsetY : -30, hzSize : 25, scaleX : 0.5, scaleY : 0.5,}, //image : "img/easydemon.png"
          { type: "reward", x: 700, y: groundY - 100},
          { type: "reward", x: 900, y: groundY - 100},
          { type: "reward", x: 1200, y: groundY - 50},
          { type: "levelMarker", x: 1400, y: groundY - 100},

        
          
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
        { type: "obstacle", x: 400, y: groundY- 60, damage: 10, hzSize : 20 , image : "img/spikes.png" ,offsetX : 0.25, offsetY : 0.25, scaleX : 0.08, scaleY : 0.08, rotation : 0},
        { type: "obstacle", x: 600, y: groundY- 60, damage: 20, hzSize : 20 , image : "img/spikes.png" ,offsetX : 0.25, offsetY : 0.25, scaleX : 0.08, scaleY : 0.08, rotation : 0},
        { type: "obstacle", x: 900, y: groundY- 70, damage: 30, hzSize : 20 , image : "img/spikes.png" ,offsetX : 0.25, offsetY : 0.25, scaleX : 0.08, scaleY :0.08, rotation : 0},
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
