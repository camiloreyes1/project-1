window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");

    let game; 

    let lane1Interval;
    let lane2Interval;
    let lane3Interval;
    let lane4Interval;

    startButton.addEventListener("click", function () {
      startGame();
    });
  
    function startGame() {
      
      game = new Game(); 
      console.log("start game", game);
      
  
      game.start(); 

        document.onkeydown = ((e) => {
        if (e.key === "ArrowLeft") {
          console.log("l")
          game.player.left -= 2.7
        }
        if (e.key === "ArrowRight") {
          console.log("r")

          game.player.left += 2.7
        }
        if (e.key === "ArrowUp") {
          console.log("u")

          game.player.top -= 2.7
        }
        if (e.key === "ArrowDown") {
          console.log("d")

          game.player.top += 2.7
        }

      });

      lane1Interval = setInterval(() => {
        game.lane1.push(new Obstacle(game.gameScreen, 0, 230, "./images/cop-car.png", 3))
      }, 2500);

      lane2Interval = setInterval(() => {
        game.lane2.push(new Obstacle(game.gameScreen, 520, 340, "./images/sports-car.png", -3))
      }, 3500);

      lane3Interval = setInterval(() => {
        game.lane3.push(new Obstacle(game.gameScreen, 0, 480, "./images/truck.png", 3))
      }, 4000);

      lane4Interval = setInterval(() => {
        game.lane4.push(new Obstacle(game.gameScreen, 520, 610, "./images/school-bus.png", -3))
      }, 1800);

        }

 
  };