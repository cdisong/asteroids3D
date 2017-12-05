// function draw() {
//   ctx.fillStyle = 'black'; 
//   ctx.fillRect(0,0, W, H);
//   ctx.clearRect(0, 0, W, H); 
//   theta += dtheta;
// }
// function render(direction) {
//   theta += dtheta; 
//   ALLPOINTS.forEach((point) => {
//     point = method(point, 0.21 * theta); 
//     renderPoint(point);
//   }),
//   requestAnimationFrame(render);
// }


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
// }

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