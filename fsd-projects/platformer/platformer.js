$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(550, 600, 50, 20, "turquoise"); // platform 3
    createPlatform(300, 650, 50, 20, "violet"); // platform 2
    createPlatform(50, 650, 50, 20, "maroon"); // platform 1
    createPlatform(750, 500, 50, 20, "indigo"); // platform 4
    createPlatform(1300, 500, 50, 20, "light green"); // platform 5
     createPlatform(950, 600, 50, 20, "blue"); // platform
    createPlatform(1100, 550, 50, 20, "red"); // platform


    // TODO 3 - Create Collectables
    createCollectable("secretcoin", 550,170,0.5,0);
    createCollectable("secretcoin", 300,170,0.5,0)
    createCollectable("secretcoin", 50,170,0.5,0)
    createCollectable("secretcoin", 950,170,0.5,0)
      createCollectable("secretcoin", 750,170,0.5,0)
    createCollectable("secretcoin", 1300,170,0.5,0)
    createCollectable("secretcoin", 1100,170,0.5,0)
    
    // TODO 4 - Create Cannons
    createCannon("left", 650,100, 1000);
    createCannon("left",  10,100, 1000);
    createCannon("top", 300,1000)
       createCannon("top", 500,1000)
       createCannon ("top", 700,1000)
       createCannon ("top", 900,1000)
      createCannon ("top", 1100,1000)
      createCannon ("top", 1300,1000)
  

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
