let champi;
let covid;
let covids = [];

let imgChampi;
let imgCovid;
let imgFondo;
let imgPiso;
let imgCielo;


function preload()
{
    imgChampi = loadImage('champi.png');
    imgCovid = loadImage('covid.png');
    imgFondo = loadImage('fondo.png');
    imgPiso = loadImage('piso.png');
    imgCielo = loadImage('cielo.png');
}

function setup(){
    createCanvas(800, 600);
    champi = new Champi();
    covid = new Covid();
    loadImage('piso.png', img=>{
    })
}

function keyPressed() {
  if (key == 'w') {
    champi.jump();

  }
  if (key == 'a') {
    champi.moveLeft();
  }
  if (key == 'd') {
    champi.moveRight();
  }
}

function draw()
{

    background(imgFondo, 0, 0);
    if(random() < 0.045)
    {

        let x = random() * (random() * 900);
        covids.push(new Covid(x,0));
    }
    if(random() < 0.02)
    {

        let y = random() * 100;
        covids.push(new Covid(0, y));
    }
    image(imgCielo, 0, 0);
    for(let c of covids)
    {
        c.show();
        c.move();
        if(champi.hits(c))
            noLoop();
    }
    
    image(imgPiso, 0, height - 100);
    champi.show();
    champi.move();
}