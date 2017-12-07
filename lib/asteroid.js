import { setInterval } from "timers";

document.addEventListener("DOMContentLoaded", () => {
    // const canvasEl = document.getElementById("canvas");
    var canvas = document.getElementById("canvas"); 
    var ctx = canvas.getContext('2d'); 
     
    var move = 100;
    var radius = 3; 
    function draw(ctx) {
      // ctx.fillRect(0,0, 400, 400); 
      // ctx.clearRect(0,0,400, 400);
      ctx.fillStyle = "black";
      ctx.beginPath(); 
      // console.log(ctx.beginPath);
      ctx.arc(200,150, radius, 0, 2 * Math.PI, false);
      ctx.fill(); 
      // console.log(radius);
      radius += 5; 
      // move += 50;
      // if (radius < 400){
      //   draw(ctx);
      // }
    } 
  
    // setInterval(draw(ctx),3000);
    for ( let i  = 0; i <10; i++) {
      // (draw(ctx)); 
      setTimeout(draw(ctx), 5000);
    }
    // requestAnimationFrame(draw(ctx));
    // console.log("hey");
  }
);


var canvas = document.getElementById("canvas"); 
var ctx = canvas.getContext('2d'); 
 

var radius = 1; 
function draw(ctx) {
  // ctx.fillRect(0,0, 400, 400); 
  // ctx.clearRect(0,0,400, 400);
  ctx.fillStyle = "black";
  ctx.beginPath(); 
  ctx.arc(100,75, 10, 0, 2 * Math.PI, false);
  ctx.fill(); 
  radius += 0.5; 
  // if (radius < 400){
  //   draw();
  // }
} 

for ( let i  = 0; i <10; i++) {
  requestAnimationFrame(draw); 
}


console.log("hel");
