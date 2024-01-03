const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

var x = 50
var y = 50
var velX = 0
var velY = 0
var camX = 0
var camY = 0
var anything = new Image()
anything.src = 'https://fxfactory.com/downloads/docs/noiseindustries/fxfactorypro/Thumbnails/Checkerboard.jpg';


Input()
while(true) {
    x+= velX 
    y+= velY
    velX = velX *.99
    velY = velY *.99
    camX = x
    camY = y

    draw()
    await sleep(1000/60)
}

function draw() {
    ctx.beginPath()
    ctx.fillStyle = "#85c963";
    ctx.rect(0, 0, 100000, 100000)
    ctx.fill()
    ctx.closePath();

    ctx.drawImage(anything, 580-camX, 650-camY, 5000, 5000)

    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(838, 459, 125, 100, 1.8 * Math.PI)
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = "#AEC6CF";
    ctx.beginPath();
    ctx.arc(838, 459, 100, 100, 1.8 * Math.PI)
    ctx.fill();
    ctx.closePath();
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function Input() { 
    document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    //alert(`Key pressed ${name} \r\n Key code value: ${code}`);
    if (code == "ArrowRight" || code == "KeyD") {
        velX+= 5
    }
    if (code == "ArrowDown" || code == "KeyS") {
        velY+= 5
    }
    if (code == "ArrowUp" || code == "KeyW") {
        velY-= 5
    }
    if (code == "ArrowLeft" || code == "KeyA") {
        velX-= 5
        
    }
    if (code == "ShiftLeft") {
        //x = Math.max(0, x - 1);
        velX *= 2
        velY *= 2
    }

  }, false);
}
