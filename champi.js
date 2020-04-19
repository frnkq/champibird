class Champi {
    constructor() {
        this.size = 150;
        this.piso = height - this.size;
        this.sizeX = 60;
        this.sizeY = 60;
        this.x = 50;
        this.y = 0;

        this.velocityY = 0;
        this.velocityX = 0;

        this.gravity = 3;
    }


    hits(covid) {
        return collideRectRect(this.x, this.y, this.sizeX, this.sizeY, covid.x, covid.y, covid.size, covid.size);
    }
    show() {
        if (this.velocityX >= 0) {
            image(imgChampi, this.x, this.y, this.sizeX, this.sizeY);
        }
        if (this.velocityX <= 0) {
            image(imgChampi, this.x, this.y, this.sizeX, this.sizeY);
        }
    }

    jump() {
        this.velocityY = -35;
    }
    moveLeft() {
        this.velocityX = -6; //left
    }
    moveRight() {
        this.velocityX = +6; //right
    }

    move() {
        this.y += this.velocityY;
        this.velocityY += this.gravity;
        this.y = constrain(this.y, 0, this.piso);
        this.x += this.velocityX;

        if (this.velocityX > 0) {
            console.log("right");
            if (this.x >= width + this.sizeX) {
                this.x = 0 - (this.sizeX / 2);
            }
        }
        if (this.velocityX < 0) {
            if (this.x <= 0 - this.sizeX) {
                this.x = width + (this.sizeX / 2);
            }
        }
    }
}