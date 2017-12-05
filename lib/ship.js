// document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById("canvas"); 
  const ctx = canvas.getContext("2d"); 
  var W = 600; 
  var H = 600; 
  var MODEL_MIN_X = -2, MODEL_MAX_X = 2;
  var MODEL_MIN_Y = -2, MODEL_MAX_Y = 2;
  var STEP = 0.5;


  var points = [];
  
  function initialGeometry() {
    for (let x = -1; x <= 1; x += STEP ) {
      for (let y = -1; y <= 1; y += STEP ) {
        for (let z = -1; z <= 1; z += STEP ) {
          points.push([x, y, z]);
        }
      }
    }
  }

  function perspectiveProjection(point) {
    var x = point[0], 
        y = point[1], 
        z = point[2]; 
    return [ 
      x / (z + 3 ), //distance between camera point and projection plane (divide by z index)
      y / (z + 3) 
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

  var theta = 0; 
  var dtheta = 0.02; 
  function render() { 
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0, W, H);
    ctx.clearRect(0, 0, W, H); 
    theta += dtheta;
    points.forEach((point) => {  
      point = rotateY(point, theta);
      
      point = rotateX(point, 0.23 * theta);
      renderPoint(point); 
    });
    requestAnimationFrame(render);
  }

  initialGeometry(); 
  render();
// });