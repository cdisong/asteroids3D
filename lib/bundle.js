/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Asteroid = __webpack_require__(1);
const Ship = __webpack_require__(2);
const Game = __webpack_require__(3); 
const GameView = __webpack_require__(4);
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
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

function renderUp() {
  hullGeometry();
  shooterGeometry();
  wingGeometry();
  bodyGeometry(); 
  ctx.fillStyle = 'black'; 
  ctx.fillRect(0,0, 800, 600); 
  ctx.clearRect(0,0, 800, 600); 
  ctx.translate(0,-1);
  theta +=  dtheta;  
  // renderPoint(allpoints);
  
  allpoints.forEach((point) => {
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
  theta +=  dtheta;
  // renderPoint(allpoints);
  
  allpoints.forEach((point) => {
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
  theta +=  dtheta;  
  // renderPoint(allpoints);
  
  allpoints.forEach((point) => {
    
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
  theta +=  dtheta;  
  // renderPoint(allpoints);
  allpoints.forEach((point) => {
    renderPoint(point);
    
  });
  // requestAnimationFrame(renderLeft());
}
 
window.addEventListener('keydown', doKeyDown, true); 

function doKeyDown(e) {
switch(e.keyCode) {
case 38: //up
requestAnimationFrame(renderUp());
break;
case 40: //down
requestAnimationFrame(renderDown());
break;

case 37: //left
requestAnimationFrame(renderLeft());

break;

case 39: //right
requestAnimationFrame(renderRight());

break;
}
}
var model_min_x = -2; 
var model_max_x = 2; 
var model_min_y = -2; 
var model_max_y = 2; 
var w = 800; 
var h = 600;
var allpoints = [];
var theta = 0; 
var dtheta = 0.02;
ctx = ctx; 


// var W = 800; 
// var H = 600; 
// var MODEL_MIN_X = -2, MODEL_MAX_X = 2;
// var MODEL_MIN_Y = -2, MODEL_MAX_Y = 2;

// var theta = 0; 
// var dtheta = 0.02; 


// var allpoints = []; 

function bodyGeometry() {
  for (let x = -1; x <= 1; x += .5 ) {
    for (let y = -1; y <= 1; y += .5 ) {
      for (let z = -4; z <= 4; z += .5 ) {
        allpoints.push([x, y, z]);
      }
    }
  }
}

function hullGeometry() {
  for (let x = -.5; x <=.5; x += .5 ) { 
    for (let y = -.5; y <= .5; y += .5 ) {
      for (let z = 5; z <= 6; z += .5 ) {
       allpoints.push([x,y,z]);
      }
    }
  }
}


function wingGeometry() {
  for (let x = -4; x <= 4; x+= .5) {
    for(let z = -4; z <= 4; z+= .5) {
      allpoints.push([(-x/.5), x, z], [(x/.5),x,z]);
    }
  }
}


function shooterGeometry() {
  for (let x = 4; x <= 5; x+= .5) { 
    for (let y = 4; y <= 5; y+= .5) {
      for (let z = -4; z <= 4; z+= .5) {
        allpoints.push([(x/.5), y, z], [(-x/.5), -y, z]);
        allpoints.push([(x/.5), -y, z], [(-x/.5), y, z]);
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
    w * (x - (-2)) / ((2) - (-2)), 
    h * (1 - (y - (-2)) / ((2)- (-2)))
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
// var theta = 0; 
// var dtheta = 0.02; 



function render() {
    hullGeometry();
    shooterGeometry();
    wingGeometry();
    bodyGeometry(); 
    ctx.fillStyle = 'black'; 
    ctx.fillRect(0,0, 800, 600); 
    ctx.clearRect(0,0, 800, 600); 
    allpoints.forEach((point) => {
      renderPoint(point);
    }
  );
}
this.render();

/***/ }),
/* 1 */
/***/ (function(module, exports) {


const DEFAULT = {
  radius: 3
};

class Asteroid {
  constructor(hmove, vmove, radius, color) {
    this.move = 500;
    this.vmove = 500;
    this.radius = DEFAULT.radius; 
    this.color = "yellow"; 
  }
  

  draw(ctx) {
    // ctx.clearRect(0,0,1"000,1000);
    ctx.fillStyle = "yellow";
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
    // this.vmove -= num[Math.floor(Math.random() * num.length)];
    // this.hmove -= num[Math.floor(Math.random() * num.length)];
    // this.vmove += num[Math.floor(Math.random() * num.length)];
    
    
    // if (this.radius <= 200) {
      let v = this.draw.bind(ctx);
      requestAnimationFrame(v);
    // }
  }

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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (280:10)\nYou may need an appropriate loader to handle this file type.\n|   \n|   \n|     window.addEventListener('keydown', doKeyDown, true); \n|         \n|     function doKeyDown(e) {");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const Asteroid = __webpack_require__(1);


class Game {
  constructor() {
    this.asteroids = []; 
    this.objects = [];
    this.addAsteroids();
  }

  addAsteroids() {
    if (this.asteroids.length < 3) {
      this.asteroids.push( new Asteroid( ));
      this.objects.push(this.asteroid);
  }}

  addShip() { 
    this.ship.push(this.ship);
    this.objects.push(this.ship);
  }

  // addObjects

  draw(ctx) {
    ctx.clearRect(0, 0, 1000, 1000);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1000, 1000);

    

    
    this.asteroids.forEach((object) => {
      object.draw(ctx);
      if (object.radius > 150) {
        this.removeAsteroid(object);
        this.addAsteroids();
      }
    });
  }

  

  

  removeAsteroid(asteroid) {
    this.asteroids.splice(this.asteroids.indexOf(asteroid), 1);
  }


}
module.exports = Game;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

class GameView {
  constructor(game, ctx) {
    this.ctx = ctx; 
    this.game = game; 
  }


  bindKeyHandlers() {
    const ship = this.ship;

    Object.keys(GameView.MOVES).forEach((k) => {
      const move = GameView.MOVES[k];
    });

  }

  start() {
    this.bindKeyHandlers();
    this.lastTime = 0;
    // start the animation
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    const timeDelta = time - this.lastTime;

    // this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;

    // every call to animate requests causes another call to animate
    requestAnimationFrame(this.animate.bind(this));
  }
}

GameView.MOVES = {
  w: [0, -1],
  a: [-1, 0],
  s: [0, 1],
  d: [1, 0],
};


module.exports = GameView;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map