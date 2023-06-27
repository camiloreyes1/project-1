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
        this.height = 840
        this.width = 650
        this.obstacles = []
        this.score = 0
        this.lives = 3
        this.gameIsOver = false

        this.lane1 = [];
        this.lane2 = [];
        this.lane3 = [];
        this.lane4 = []; 


}
    start() {

    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;

    this.homeScreen.style.display = "none";
    this.gameScreen.style.display = "center";

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

      console.log(this.lane1)

      for (let i = 0; i < this.lane1.length; i++) {
        
        if (this.lane1[i].left + this.lane1[i].width > 650){
          this.lane1[i].element.remove();
          this.lane1.splice(i, 1)
        }
        this.lane1[i].move()
      }

      for (let i = 0; i < this.lane2.length; i++) {
        
        if (this.lane2[i].left + this.lane2[i].width > 650){
          this.lane2[i].element.remove();
          this.lane2.splice(i, 1)
        }
        this.lane2[i].move()
      }

      for (let i = 0; i < this.lane3.length; i++) {
      
        if (this.lane3[i].left + this.lane3[i].width > 650){
          this.lane3[i].element.remove();
          this.lane3.splice(i, 1)
        }
        this.lane3[i].move()
      }

      for (let i = 0; i < this.lane4.length; i++) {
      
        if (this.lane4[i].left + this.lane4[i].width > 650){
          this.lane4[i].element.remove();
          this.lane4.splice(i, 1)
        }
        this.lane4[i].move()
      }

      

    
      }
    
    }

    