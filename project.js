document.addEventListener("DOMContentLoaded", () => {
  
  
    const canvas = document.getElementById("canvas"); 
    const ctx = canvas.getContext("2d"); 
  
    var W = 800; 
    var H = 600; 
    var MODEL_MIN_X = -2, MODEL_MAX_X = 2;
    var MODEL_MIN_Y = -2, MODEL_MAX_Y = 2;
  
  
    var ALLPOINTS = []; 
  
    function bodyGeometry() {
      for (let x = -1; x <= 1; x += .5 ) {
        for (let y = -1; y <= 1; y += .5 ) {
          for (let z = -4; z <= 4; z += .5 ) {
            ALLPOINTS.push([x, y, z]);
          }
        }
      }
    }
  
    function hullGeometry() {
      for (let x = -.5; x <=.5; x += .5 ) { 
        for (let y = -.5; y <= .5; y += .5 ) {
          for (let z = 5; z <= 6; z += .5 ) {
            ALLPOINTS.push([x,y,z]);
          }
        }
      }
    }
  
  
    function wingGeometry() {
      for (let x = -4; x <= 4; x+= .5) {
        for(let z = -4; z <= 4; z+= .5) {
          ALLPOINTS.push([(-x/.5), x, z], [(x/.5),x,z]);
        }
      }
    }
  
  
    function shooterGeometry() {
      for (let x = 4; x <= 5; x+= .5) { 
        for (let y = 4; y <= 5; y+= .5) {
          for (let z = -4; z <= 4; z+= .5) {
            ALLPOINTS.push([(x/.5), y, z], [(-x/.5), -y, z]);
            ALLPOINTS.push([(x/.5), -y, z], [(-x/.5), y, z]);
          }
        }
      }
    }
  
    function rotateY(point, theta) { 
      var x = point[0], 
          y = point[1], 
          z = point[2];
      
      return  [
        Math.cos(theta) * x - Math.sin(theta) * z,
        y,
        Math.sin(theta) * x + Math.cos(theta) * z 
        
      ];
    }
  
    function rotateX(point, theta) { 
      var x = point[0], 
          y = point[1], 
          z = point[2];
      
      return [
        x, 
        Math.cos(theta) * y - Math.sin(theta) * z,
        Math.sin(theta) * y  + Math.cos(theta) * z 
        
      ];
    }
  
    function rotateUp (point, theta) {
      var x = point[0], 
          y = point[1], 
          z = point[2]; 
      return [ 
        x,
        Math.cos(theta) * y - Math.sin(theta) * z,
        z 
      ];
    }
    function perspective(point) {
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
    function project(point) {
      var perspectivePoint = perspective(point);
      var x = perspectivePoint[0]; 
      var y = perspectivePoint[1];  
      return [
        W * (x - MODEL_MIN_X) / (MODEL_MAX_X - MODEL_MIN_X),
        H * (1 - (y - MODEL_MIN_Y) / (MODEL_MAX_Y - MODEL_MIN_Y))
      ];
    }
  
    function renderPoint(point) {
      var projectedPoint = project(point); 
      var x = projectedPoint[0], 
          y = projectedPoint[1];
      ctx.beginPath();
      ctx.moveTo(x,y);
      ctx.lineTo(x + 4, y + 4);
      ctx.lineWidth = 4; 
      ctx.strokeStyle = 'black'; 
      ctx.stroke(); 
    }
  
  
    // 
    var theta = 0; 
    var dtheta = 0.02; 
  
  
    function renderUp() {
      hullGeometry();
      shooterGeometry();
      wingGeometry();
      bodyGeometry(); 
      ctx.fillStyle = 'black'; 
      ctx.fillRect(0,0, 800, 600); 
      ctx.clearRect(0,0, 800, 600); 
      ctx.translate(0,-1);
      theta += dtheta;  
      // renderPoint(ALLPOINTS);
      
      ALLPOINTS.forEach((point) => {
        rotateUp(point);
        renderPoint(point);
      });
      // requestAnimationFrame(renderUp());
      
    }
  
    function renderRight() {
      hullGeometry();
      shooterGeometry();
      wingGeometry();
      bodyGeometry(); 
      ctx.fillStyle = 'black'; 
      ctx.fillRect(0,0, 800, 600); 
      ctx.clearRect(0,0, 800, 600); 
      ctx.translate(1,0);
      theta += dtheta;
      // renderPoint(ALLPOINTS);
      
      ALLPOINTS.forEach((point) => {
        // point = (x y z )
    //   point = rotateY(point, 0.23 * theta);
      renderPoint(point);
        // console.log(point);
      });
      // requestAnimationFrame(renderRight());
      console.log("moved");
      
  
    }
  
    function renderDown() {
      hullGeometry();
      shooterGeometry();
      wingGeometry();
      bodyGeometry(); 
      ctx.fillStyle = 'black'; 
      ctx.fillRect(0,0, 800, 600); 
      ctx.clearRect(0,0, 800, 600); 
      ctx.translate(0,1);
      theta += dtheta;  
      // renderPoint(ALLPOINTS);
      
      ALLPOINTS.forEach((point) => {
        
        // point = rotateX(point, 0.23 * theta);
        renderPoint(point);
        
      });
      console.log("moved");
      // requestAnimationFrame(renderDown());
      
    }
  
  
    function renderLeft() {
      hullGeometry();
      shooterGeometry();
      wingGeometry();
      bodyGeometry(); 
      ctx.fillStyle = 'black'; 
      ctx.fillRect(0,0, 800, 600); 
      ctx.clearRect(0,0, 800, 600); 
      ctx.translate(-1,0);
      theta += dtheta;  
      // renderPoint(ALLPOINTS);
      ALLPOINTS.forEach((point) => {
        renderPoint(point);
        
      });
      // requestAnimationFrame(renderLeft());
    }
  
    function render() {
        hullGeometry();
        shooterGeometry();
        wingGeometry();
        bodyGeometry(); 
        ctx.fillStyle = 'black'; 
        ctx.fillRect(0,0, 800, 600); 
        ctx.clearRect(0,0, 800, 600); 
        ALLPOINTS.forEach((point) => {
          renderPoint(point);
        }
      );
    }
    render();
        // this is rotation movement actions//
        // render();
        // hullGeometry();
        // shooterGeometry();
        // wingGeometry();
        // bodyGeometry();
        
        // function render() { 
        //   ctx.fillStyle = 'black';
        //   ctx.fillRect(0,0, W, H);
        //   ctx.clearRect(0, 0, W, H); 
        //   // ctx.translate(-1, 0);
        //   theta += dtheta;
        //   ALLPOINTS.forEach((point) => {  
        //     point = rotateY(point, 0.23 * theta);
        //     // point = rotateUp(point, 0.23 * theta);
            
            
        //     point = rotateX(point, 0.23 * theta);
        //     renderPoint(point); 
        //   });
        //   requestAnimationFrame(render);
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
  
  });