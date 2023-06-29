window.onload = function () {
    const startButton = document.getElementById("start-button");

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
          game.player.left -= 3.2
        }
        if (e.key === "ArrowRight") {
          console.log("r")

          game.player.left += 3.2
        }
        if (e.key === "ArrowUp") {
          console.log("u")

          game.player.top -= 3.2
        }
        if (e.key === "ArrowDown") {
          console.log("d")

          game.player.top += 3.3
        }

      });

      lane1Interval = setInterval(() => {
        game.lane1.push(new Obstacle(game.gameScreen, 0, 230, "./images/cop-car.png", 3))
      }, 1800);

      lane2Interval = setInterval(() => {
        game.lane2.push(new Obstacle(game.gameScreen, 550, 340, "./images/blue-car.png", -3))
      }, 1700);

      lane3Interval = setInterval(() => {
        game.lane3.push(new Obstacle(game.gameScreen, 0, 480, "./images/truck.png", 3))
      }, 2000);

      lane4Interval = setInterval(() => {
        game.lane4.push(new Obstacle(game.gameScreen, 550, 610, "./images/school-bus.png", -3))
      }, 1900);

              
      }

 
  };