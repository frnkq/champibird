class Covid
{
    constructor(x,y)
    {
        this.size = 40;
        this.x = x ? x : 0;
        this.y = 0;

        this.velocityY = 0;
        this.velocityX = 0;
        this.gravity = 3;
    }

    show()
    {
        //fill(20);
        //rect(this.x, this.y, this.size, this.size);
        image(imgCovid, this.x, this.y, this.size, this.size);
        if(this.y >= height - 110)
            //this.y = height;
            delete this;

    }

    move()
    {
        this.y += this.velocityY;
        this.y += this.gravity;
    }
}