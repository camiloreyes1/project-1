class Obstacle {
    constructor (gameScreen, left, top, imageSrc, directionX ) {
        this.gameScreen = gameScreen;

        this.left = left;
        this.top = top;
        this.width = 100;
        this.height = 120;
        this.directionX = directionX;
        this.element = document.createElement("img");

        this.element.src = imageSrc;
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;

        this.gameScreen.appendChild(this.element);
    }

    move() {
        this.left += this.directionX
        this.updatePosition()
    }

    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }

}