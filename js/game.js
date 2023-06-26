class Game{
    
    constructor () {
        this.homeScreen = document.getElementById("home-screen");
        this.gameScreen = document.getElementById("game-screen");
        this.player = new Player(
            this.gameScreen,
            50,
            50,
            50,
            50,
            "./images/chic.png"
        );
        this.height = 850
        this.width = 500
        this.obstacles = []
        this.score = 0
        this.lives = 3
        this.gameIsOver = false

}
    start() {

    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;

    this.homeScreen.style.display = "none";
    this.gameScreen.style.display = "block";

    this.gameLoop();

    }

    gameLoop() {

          if (this.gameIsOver) {
          return;
        }
    
        this.update();
    
        window.requestAnimationFrame(() => this.gameLoop());
      }

    update() {
    
      this.player.move();

    }
    
    }

    