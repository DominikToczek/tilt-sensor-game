function randomHole() {
    let hole = document.getElementById('hole');
    let numOfPixels = Math.floor(Math.random() * 614);
    hole.style.top = numOfPixels + "px";
    numOfPixels = Math.floor(Math.random() * 650);
    hole.style.left = numOfPixels + "px";
}

window.onload = randomHole;


let ball   = document.querySelector('.ball');
let hole = document.querySelector('.hole');

let maxX = 700  - ball.clientWidth;
let maxY = 700 - ball.clientHeight;
let ballX = 340;
let ballY = 340;
let position;
let time1;
let time2;

function handleOrientation(event) {
  let x = event.beta;
  let y = event.gamma;

  if (x >  93) { x =  93};
  if (x < -87.4) { x = -87.4};
  if (y >  93) { y =  93};
  if (y < -87.4) { y = -87.4};
  
  x += 90;
  y += 90;

  ball.style.top  = (maxX*x/180 - 10) + "px";
  ball.style.left = (maxY*y/180 - 10) + "px";

  if ((parseInt(ball.style.top) >= parseInt(hole.style.top)) && 
      (parseInt(ball.style.top) <= parseInt(hole.style.top)+30) &&
      (parseInt(ball.style.left) >= parseInt(hole.style.left)) && 
      (parseInt(ball.style.left) <= parseInt(hole.style.left)+30)
     )
  {
      time2 = new Date().getTime();
      let time = (time2 - time1)/1000;
      window.alert("Game over!\nYour time: " + time.toFixed(3) + " seconds");
      randomHole();
  }
}

document.getElementById('start').addEventListener('click', function(){
    window.addEventListener('deviceorientation', handleOrientation);
    time1 = new Date().getTime();
})
