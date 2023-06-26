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

      })

      lane1Interval = setInterval(() => {
        game.lane1.push(new Obstacle(game.gameScreen, 0, 230, "./images/cop-car.png", 3))
      }, 2500)

        }

 
  };