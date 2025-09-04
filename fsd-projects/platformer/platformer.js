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
    createPlatform(400, 600, 100, 20, "purple");
    createPlatform(300, 650, 100, 20, "red");
    createPlatform(200, 650, 100, 20, "blue");
    createPlatform(500, 650, 100, 20, "green");
    createPlatform(400, 300, 200, 20, "blue", 300, 500, 1);

    // TODO 3 - Create Collectables
    createCollectable("database", 200,170,0.5,0);
    createCollectable("database", 300,170,0.5,0)
    createCollectable("database", 400,170,-0.5,0.9)

    
    // TODO 4 - Create Cannons
    createCannon("left", 650,1000);
    createCannon("up",  500,200);
    createCannon("up",  500,200)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
