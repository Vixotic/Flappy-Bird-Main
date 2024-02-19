//board
let board
let boardWidth = 360
let boardHeight = 640
let context

//bird
let birdWidth = 34
let birdHeight =24
let birdX = boardWidth/8
let birdY = boardHeight/2
let birdImg


let bird = {
   x : birdX,
   y : birdY,
   width : birdWidth,
   height : birdHeight
}

//pipes
let pipeArray = []
let pipeWidth = 64
let pipeHeight = 512
let pipeX = boardWidth
let pipeY = 0

let topPipeImg;
let bottomPipeImg;

//physics
let velocityX = -2


window.onload = function() {
   board = document.getElementById("board")
   board.height = boardHeight
   board.width = boardWidth
   context = board.getContext("2d")

   //drawing the bird
   //context.fillstyle = "red"
   //context.fillRect(bird.x, bird.y, bird.width, bird.height)

   //loading image
   birdImg = new Image()
   birdImg.src = "./flappybird.png"
   birdImg.onload = function() {
      context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
   }

   topPipeImg = new Image();
   topPipeImg.src = "./toppipe.png";

   bottomPipeImg = new Image();
   bottomPipeImg.src = "./bottompipe.png";


   requestAnimationFrame(update);
   setInterval(placePipes, 1500);
}

function update() {
   requestAnimationFrame(update);
   context.clearRect(0, 0, bird.width, bird.height);

   //bird
   context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);

   //pipes
   for (let i = 0; i < pipeArray.length; i++) {
      let pipe = pipeArray[i];
      pipe.x += velocityX;
      context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);
   }
}

function placePipes() {

   let randomPipeY = pipeY - pipeHeight/4 - Math.random()*(pipeHeight/2);
   let topPipe = {
      img : topPipeImg,
      x : pipeX,
      y : randomPipeY,
      width : pipeWidth,
      height : pipeHeight,
      passed : false
   }
 
   pipeArray.push(topPipe);
}

