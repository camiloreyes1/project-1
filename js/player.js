class Player {
    constructor(gameScreen, left, top, width, height, imgSrc) {

      this.gameScreen = gameScreen;
      this.left = left;
      this.top = top;
      this.width = width;
      this.height = height;
      this.directionX = 0;
      this.directionY = 0;
      this.element = document.createElement("img");
      this.lives = 3
  
      this.element.src = imgSrc;
      this.element.style.position = "absolute";

      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
  
      this.gameScreen.appendChild(this.element);
    }

    move() {

      if (this.left < 5) {
        this.left = 5;
      }
  
      if (this.top < 5) {
        this.top = 5;
      }
  
      if (this.left > this.gameScreen.offsetWidth - this.width - 5) {
        this.left = this.gameScreen.offsetWidth - this.width - 5;
      }
  
      if (this.top > this.gameScreen.offsetHeight - this.height - 5) {
        this.top = this.gameScreen.offsetHeight - this.height - 5;
      }
  
      this.updatePosition();
    }
  
    updatePosition() {
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
    }

    crashed(obstacle) {

      if (
        this.left < obstacle.left + obstacle.width &&
        this.left + this.width > obstacle.left &&
        this.top < obstacle.top + obstacle.height / 2 &&
        this.height / 4  + this.top > obstacle.top 
      ) {

        this.lives --;
        this.left = 90;
        this.top = 90;
        window.alert(`You have ${this.lives} lives left!`)
       
      }
  }

    winGame(finishLine) {
    
    if (
      this.left < finishLine.left + finishLine.width &&
      this.left + this.width > finishLine.left &&
      this.top < finishLine.top + finishLine.height / 2  &&
      this.height / 2 + this.top > finishLine.top 
      ) {
        window.alert("Why did the chicken cross the road? ...To bock traffic!!!")
      }
    }

    gameIsOver () {
      if (this.lives === 0) {
        return true
      } else  {
        return false 
      }
      }
}