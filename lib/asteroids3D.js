const Asteroid = require("./asteroid");
const Ship = require("./ship");
const Game = require("./game"); 
const GameView = require("./gameview");
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 1000;
  canvas.height = 1000;
  // const asteroids = []; 
  // var radius = 1;
  // var hmove = 500;
  // var vmove = 500;
  const game = new Game();
  new GameView(game, ctx).start();
  // function draw() {
  //   const canvas = document.getElementById("canvas");
  //   const ctx = canvas.getContext("2d");
  //   ctx.clearRect(0,0,1000,1000);
  //   ctx.fillStyle = "black";
  //   ctx.beginPath(); 
  //   ctx.arc(hmove, vmove, radius, 0, 2 * Math.PI, false);
  //   ctx.fill();
  //   hmove += 2; 
  //   vmove += 0;
  //   radius += 2; 
  //   if (radius < 200) {
  //     let v = draw.bind(ctx);
  //     requestAnimationFrame(v);
  //   }
    
  // }

  // // asteroids.forEach((asteroid) => {
  //   draw(500, 500);
  //   // draw(300, 200);
  // // });

  
  
  // function addAsteroids() {
  //   for (let i = 0; i < 11; i++) {
  //     asteroids.push(this.asteroid);
  //   }
  // }


  // function remove(asteroid) {
  //   asteroids.splice(this.asteroids.indexOf(asteroid), 1);
  // }


});
