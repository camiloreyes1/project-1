window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    let game; 
  
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
          game.player.left -= 1.3
        }
        if (e.key === "ArrowRight") {
          console.log("r")

          game.player.left += 1.3
        }
        if (e.key === "ArrowUp") {
          console.log("u")

          game.player.top -= 1.3
        }
        if (e.key === "ArrowDown") {
          console.log("d")

          game.player.top += 1.3
        }
      })
        }

 
  };