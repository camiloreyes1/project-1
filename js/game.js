class Game{
    
    constructor () {

        this.homeScreen = document.getElementById("home-screen");
        this.gameScreen = document.getElementById("game-screen");
        this.player = new Player(
            this.gameScreen,
            90,
            90,
            50,
            50,
            "./images/chic.png"
            );

            this.flag = new FinishLine (
            this.gameScreen,
            225,
            790,
            280,
            90,
            "./images/finish-line.png"
            );
       
        this.height = 840
        this.width = 650
        this.obstacles = []
        this.gameIsOver = false

        this.lane1 = [];
        this.lane2 = [];
        this.lane3 = [];
        this.lane4 = []; 
        this.lane5 = [];


}
    start() {

    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;

    this.homeScreen.style.display = "none";
    this.gameScreen.style.display = "center";

    this.gameLoop();

    }

    gameLoop() {

        this.update();
    
        window.requestAnimationFrame(() => this.gameLoop());
      }

    update() {
    
      this.player.move();

      for (let i = 0; i < this.lane1.length; i++) {

         (this.player.crashed(this.lane1[i]))

        if (this.lane1[i].left + this.lane1[i].width > 650){
          this.lane1[i].element.remove();
          this.lane1.splice(i, 1)
        }
        this.lane1[i].move()
        
      }

      for (let i = 0; i < this.lane2.length; i++) {

        this.player.crashed(this.lane2[i])

        
        if (this.lane2[i].left + this.lane2[i].width > 650){
          this.lane2[i].element.remove();
          this.lane2.splice(i, 1)
        }
        this.lane2[i].move()
      }

      for (let i = 0; i < this.lane3.length; i++) {

        this.player.crashed(this.lane3[i])
        
        
        if (this.lane3[i].left + this.lane3[i].width > 650){
          this.lane3[i].element.remove();
          this.lane3.splice(i, 1)
        }
        this.lane3[i].move()
      }

      for (let i = 0; i < this.lane4.length; i++) {
      
        this.player.crashed(this.lane4[i])
        
        if (this.lane4[i].left + this.lane4[i].width > 650){
          this.lane4[i].element.remove();
          this.lane4.splice(i, 1)
        }
        this.lane4[i].move()
      }

      this.player.winGame(this.flag)
    
      if (this.player.gameIsOver()) {

        window.alert("GAME OVER - THE CHICKEN COULDN'T CROSS THE ROAD :(");
        location.reload();

      }
   
    }
   
    
    }

    