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
window.onload = function() {
  const background = document.getElementById("background"); 
  const ctx = background.getContext("2d"); 
  var img = new Image(); 
  img.src = "../imgae/solar.jpeg"; 
  ctx.drawImage(img, 900, 600);
};

// window.onload = function() {
//   var c=document.getElementById("myCanvas");
//   var ctx=c.getContext("2d");
//   var img=document.getElementById("scream");
//   ctx.drawImage(img,10,10);
// };