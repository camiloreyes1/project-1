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
  
  }