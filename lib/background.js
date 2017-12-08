// const background = document.getElementById("background"); 
// const ctx = background.getContext("2d");

// var W = 900;
// var H = 600; 




// function render() {  
//   ctx.clearRect(0,0,W, H);
//   const space = new Image();
//   space.src = '../image/solar.jpeg';
//   space.onload = function(){
//     ctx.drawImage(space, W, H);
//   };
// }

// render();
// window.onload = function() {
//   const background = document.getElementById("background"); 
//   const ctx = background.getContext("2d"); 
//   var img = new Image(); 
//   img.src = "../imgae/solar.jpeg"; 
//   ctx.drawImage(img, 900, 600);
// };

// window.onload = function() {
//   var c=document.getElementById("myCanvas");
//   var ctx=c.getContext("2d");
//   var img=document.getElementById("scream");
//   ctx.drawImage(img,10,10);
// };

var canvas = document.getElementById("canvas"); 
var ctx = canvas.getContext("2d"); 

canvas.width = 1000; 
canvas.height = 1000; 
var background = new Image(); 
background.src = "solar/jpeg";

background.onload = function( ) { 
  ctx.drawImage(background, 0, 0);
};