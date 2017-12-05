// document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById("canvas"); 
  const ctx = canvas.getContext("2d"); 
  var W = 600; 
  var H = 600; 
  var MODEL_MIN_X = -2, MODEL_MAX_X = 2;
  var MODEL_MIN_Y = -2, MODEL_MAX_Y = 2;


  var bpoints = [];
  
  function bodyGeometry() {
    for (let x = -1; x <= 1; x += .5 ) {
      for (let y = -1; y <= 1; y += .5 ) {
        for (let z = -4; z <= 4; z += .5 ) {
          bpoints.push([x, y, z]);
        }
      }
    }
  }

  var hpoints = [];

  function hullGeometry() {
    for (let x = -.5; x <=.5; x += .5 ) { 
      for (let y = -.5; y <= .5; y += .5 ) {
        for (let z = -6; z <= -5; z += .5 ) {
          hpoints.push([x,y,z]);
        }
      }
    }
  }


  var wpoints = []; 
  console.log(wpoints);
  function wingGeometry() {
    for (let x = -4; x <= 4; x++) {
      for(let z = -4; z <= 4; z++) {
        wpoints.push([(-x/.5), x, z], [(x/.5),x,z]);
      }
    }
  }


  var spoints = []; 
  function shooterGeometry() {
    for (let x = 4; x <= 5; x++) { 
      for (let y = 4; y <= 5; y++) {
        for (let z = -4; z <= 4; z++) {
          spoints.push([(x/.5), y, z], [(-x/.5), -y, z]);
          spoints.push([(x/.5), -y, z], [(-x/.5), y, z]);
        }
      }
    }
  }
  function perspectiveProjection(point) {
    var x = point[0], 
        y = point[1], 
        z = point[2]; 
    return [ 
      x / (z + 20 ), //distance between camera point and projection plane (divide by z index)
      y / (z + 20) 
    ];

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

    return  [
      x, 
      Math.cos(theta) * y - Math.sin(theta) * z,
      Math.sin(theta) * y  + Math.cos(theta) * z 

    ];
  }
  // taking out z index for now 
  // takes coordinate from model and projects into 2 dimensional
  function project(point) {
    var perspectivePoint = perspectiveProjection(point);
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
    ctx.lineTo(x + 1, y + 1);
    ctx.lineWidth = 4; 
    ctx.strokeStyle = 'white'; 
    ctx.stroke(); 
  }

  // 
  var theta = 0; 
  var dtheta = 0.02; 
  function render() { 
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0, W, H);
    ctx.clearRect(0, 0, W, H); 
    theta += dtheta;
    spoints.forEach((point) => {  
      // point = rotateY(point, 0.5 * theta);
      
      // point = rotateX(point, 0.23 * theta);
      renderPoint(point); 
    });
    hpoints.forEach((point) => {  
      // point = rotateY(point, 0.5 * theta);
      
      // point = rotateX(point, 0.23 * theta);
      renderPoint(point); 
    });
    wpoints.forEach((point) => {  
      // point = rotateY(point, 0.5 * theta);
      
      // point = rotateX(point, 0.23 * theta);
      renderPoint(point); 
    });
    bpoints.forEach((point) => {
      // point = rotateY(point, 0.5 * theta);
      
      // point = rotateX(point, 0.23 * theta);
      renderPoint(point); 
    });
    requestAnimationFrame(render);
  }
  hullGeometry();
  shooterGeometry();
  wingGeometry();
  bodyGeometry(); 
  render();
// });