// document.addEventListener("DOMContentLoaded", () => {
  
  
//     const canvas = document.getElementById("canvas"); 
//     const ctx = canvas.getContext("2d"); 

class Ship { 
  constructor(ctx) {
    this.model_min_x = -2; 
    this.model_max_x = 2; 
    this.model_min_y = -2; 
    this.model_max_y = 2; 
    this.w = 800; 
    this.h = 600;
    this.allpoints = [];
    this.theta = 0; 
    this.dtheta = 0.02;
    this.ctx = ctx; 
  }

    // var W = 800; 
    // var H = 600; 
    // var MODEL_MIN_X = -2, MODEL_MAX_X = 2;
    // var MODEL_MIN_Y = -2, MODEL_MAX_Y = 2;

    // var theta = 0; 
    // var dtheta = 0.02; 
  
  
    // var allpoints = []; 
  
    bodyGeometry() {
      for (let x = -1; x <= 1; x += .5 ) {
        for (let y = -1; y <= 1; y += .5 ) {
          for (let z = -4; z <= 4; z += .5 ) {
            this.allpoints.push([x, y, z]);
          }
        }
      }
    }
  
    hullGeometry() {
      for (let x = -.5; x <=.5; x += .5 ) { 
        for (let y = -.5; y <= .5; y += .5 ) {
          for (let z = 5; z <= 6; z += .5 ) {
           this.allpoints.push([x,y,z]);
          }
        }
      }
    }
  
  
    wingGeometry() {
      for (let x = -4; x <= 4; x+= .5) {
        for(let z = -4; z <= 4; z+= .5) {
          this.renderallpoints.push([(-x/.5), x, z], [(x/.5),x,z]);
        }
      }
    }
  
  
    shooterGeometry() {
      for (let x = 4; x <= 5; x+= .5) { 
        for (let y = 4; y <= 5; y+= .5) {
          for (let z = -4; z <= 4; z+= .5) {
            this.allpoints.push([(x/.5), y, z], [(-x/.5), -y, z]);
            this.allpoints.push([(x/.5), -y, z], [(-x/.5), y, z]);
          }
        }
      }
    }
  
    rotateY(point, theta) { 
      var x = point[0], 
          y = point[1], 
          z = point[2];
      
      return  [
        Math.cos(theta) * x - Math.sin(theta) * z,
        y,
        Math.sin(theta) * x + Math.cos(theta) * z 
        
      ];
    }
  
    rotateX(point, theta) { 
      var x = point[0], 
          y = point[1], 
          z = point[2];
      
      return [
        x, 
        Math.cos(theta) * y - Math.sin(theta) * z,
        Math.sin(theta) * y  + Math.cos(theta) * z 
        
      ];
    }
  
    rotateUp (point, theta) {
      var x = point[0], 
          y = point[1], 
          z = point[2]; 
      return [ 
        x,
        Math.cos(theta) * y - Math.sin(theta) * z,
        z 
      ];
    }
    perspective(point) {
      var x = point[0], 
          y = point[1], 
          z = point[2]; 
      return [ 
        x / (z + 20), //distance between camera point and projection plane (divide by z index)
        y / (z + 20) 
      ];
  
    }
    // taking out z index for now 
    // takes coordinate from model and projects into 2 dimensional
    project(point) {
      var perspectivePoint = this.perspective(point);
      var x = perspectivePoint[0]; 
      var y = perspectivePoint[1];  
      return [
        this.w * (x - (-2)) / ((2) - (-2)), 
        this.h * (1 - (y - (-2)) / ((2)- (-2)))
      ];
    }

 
  
    renderPoint(point) {
      var projectedPoint = this.project(point); 
      var x = projectedPoint[0], 
          y = projectedPoint[1];
      this.ctx.beginPath();
      this.ctx.moveTo(x,y);
      this.ctx.lineTo(x + 4, y + 4);
      this.ctx.lineWidth = 4; 
      this.ctx.strokeStyle = 'black'; 
      this.ctx.stroke(); 
    }
  
  
    // 
    // var theta = 0; 
    // var dtheta = 0.02; 
  
  
    renderUp() {
      this.hullGeometry();
      this.shooterGeometry();
      this.wingGeometry();
      this.bodyGeometry(); 
      this.ctx.fillStyle = 'black'; 
      this.ctx.fillRect(0,0, 800, 600); 
      this.ctx.clearRect(0,0, 800, 600); 
      this.ctx.translate(0,-1);
      this.theta += this.dtheta;  
      // renderPoint(allpoints);
      
      this.allpoints.forEach((point) => {
        this.rotateUp(point);
        this.renderPoint(point);
      });
      // requestAnimationFrame(renderUp());
      
    }
  
    renderRight() {
      this.hullGeometry();
      this.shooterGeometry();
      this.wingGeometry();
      this.bodyGeometry(); 
      this.ctx.fillStyle = 'black'; 
      this.ctx.fillRect(0,0, 800, 600); 
      this.ctx.clearRect(0,0, 800, 600); 
      this.ctx.translate(1,0);
      this.theta += this.dtheta;
      // renderPoint(allpoints);
      
      this.allpoints.forEach((point) => {
        // point = (x y z )
    //   point = rotateY(point, 0.23 * theta);
      this.renderPoint(point);
        // console.log(point);
      });
      // requestAnimationFrame(renderRight());
      console.log("moved");
      
  
    }
  
    renderDown() {
      this.hullGeometry();
      this.shooterGeometry();
      this.wingGeometry();
      this.bodyGeometry(); 
      this.ctx.fillStyle = 'black'; 
      this.ctx.fillRect(0,0, 800, 600); 
      this.ctx.clearRect(0,0, 800, 600); 
      this.ctx.translate(0,1);
      this.theta += this.dtheta;  
      // renderPoint(allpoints);
      
      this.allpoints.forEach((point) => {
        
        // point = rotateX(point, 0.23 * theta);
        this.renderPoint(point);
        
      });
      console.log("moved");
      // requestAnimationFrame(renderDown());
      
    }
  
  
    renderLeft() {
      this.hullGeometry();
      this.shooterGeometry();
      this.wingGeometry();
      this.bodyGeometry(); 
      this.ctx.fillStyle = 'black'; 
      this.ctx.fillRect(0,0, 800, 600); 
      this.ctx.clearRect(0,0, 800, 600); 
      this.ctx.translate(-1,0);
      this.theta += this.dtheta;  
      // renderPoint(allpoints);
      this.allpoints.forEach((point) => {
        this.renderPoint(point);
        
      });
      // requestAnimationFrame(renderLeft());
    }
  
    render() {
        this.hullGeometry();
        this.shooterGeometry();
        this.wingGeometry();
        this.bodyGeometry(); 
        this.ctx.fillStyle = 'black'; 
        this.ctx.fillRect(0,0, 800, 600); 
        this.ctx.clearRect(0,0, 800, 600); 
        this.allpoints.forEach((point) => {
          this.renderPoint(point);
        }
      );
    }
    // this.render();
        // this is rotation movement actions//
        // this.render();
        // this.hullGeometry();
        // this.shooterGeometry();
        // this.wingGeometry();
        // this.bodyGeometry();
        
        // function render() { 
        //   this.ctx.fillStyle = 'black';
        //   this.ctx.fillRect(0,0, W, H);
        //   this.ctx.clearRect(0, 0, W, H); 
        //   // this.ctx.translate(-1, 0);
        //   this.theta += this.dtheta;
        //   this.allpoints.forEach((point) => {  
        //     point = this.rotateY(point, 0.23 * theta);
        //     // point = this.rotateUp(point, 0.23 * theta);
            
            
        //     point = this.rotateX(point, 0.23 * theta);
        //     this.renderPoint(point); 
        //   });
        //   requestAnimationFrame(this.render);
        //   console.log("hey");
        // }
        // end rotation movement actions// 
        
  
  
  
    // window.addEventListener('keydown', doKeyDown, true); 
        
    // function doKeyDown(e) {
    //   switch(e.keyCode) {
    //     case 38: //up
    //     requestAnimationFrame(renderUp());
    //     break;
    //     case 40: //down
    //     requestAnimationFrame(renderDown());
    //     break;
        
    //     case 37: //left
    //     requestAnimationFrame(renderLeft());
        
    //     break;
        
    //     case 39: //right
    //     requestAnimationFrame(renderRight());
        
    //     break;
    //   }
    // }
  
  }