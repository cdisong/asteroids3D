const background = document.getElementById("background"); 
const ctx = background.getContext("2d");

var W = 900;
var H = 600; 




function render() { 
  ctx.fillStyle = 'black'; 
  ctx.fillRect(0,0,W,H);
}