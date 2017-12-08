
const DEFAULT = {
  radius: 3
};

class Asteroid {
  constructor(hmove, vmove, radius, color) {
    this.move = 500;
    this.move = 500;
    this.radius = DEFAULT.radius; 
    this.color = "yellow"; 
  }
  

  draw(ctx) {
    // ctx.clearRect(0,0,1"000,1000);
    ctx.fillStyle = "grey";
    // ctx.fillRect(0,0,800,600);
    ctx.beginPath(); 
    ctx.arc(this.move, this.move, this.radius, 0, 2 * Math.PI, false);
    ctx.fill();
    this.radius += 2; 
    var num = [1,20,3,4,15,6,17,-15,-6,-7,-83,-9]; 
    this.move += num[Math.floor(Math.random() * num.length)];
    // this.move += num[Math.floor(Math.random() * num.length)];
    
    // this.vmove += 1;
    // this.hmove += num[Math.floor(Math.random() * num.length)];
    // this.move -= num[Math.floor(Math.random() * num.length)];
    // this.hmove -= num[Math.floor(Math.random() * num.length)];
    // this.vmove += num[Math.floor(Math.random() * num.length)];
    
    
    // if (this.radius <= 200) {
      let v = this.draw.bind(ctx);
      requestAnimationFrame(v);
    // }
  }

  // cdraw(ctx) { 
  //   ctx.fillStyle = "yellow"; 
  //   ctx.beginPath(); 
  //   ctx.arc(500, 500, this.radius, 0, 2 * Math.PI, false);
  //   ctx.fill();
  //   // requestAnimationFrame(cdraw(ctx));
  // }
}

// 
// var radius = 1;
// var move = 75;
// function draw() {
//   const canvas = document.getElementById("canvas");
//   const ctx = canvas.getContext("2d");
//   ctx.clearRect(0,0,1000,1000);
//   ctx.fillStyle = "black";
//   ctx.beginPath(); 
//   ctx.arc(500, 300, radius, 0, 2 * Math.PI, false);
//   ctx.fill();
//   radius += 2; 
//   if (radius < 200) {
//     let v = draw.bind(ctx);
//     requestAnimationFrame(v);
//   }
// }
// draw();

// 


module.exports = Asteroid;