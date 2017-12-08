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
    this.move -= num[Math.floor(Math.random() * num.length)];
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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const Asteroid = __webpack_require__(1);


class Game {
  constructor() {
    this.asteroids = []; 

    this.addAsteroids();
  }

  addAsteroids() {
    if (this.asteroids.length < 3) {
      this.asteroids.push( new Asteroid( ));
      this.asteroids.push( new Asteroid( ));
    }
  }

  // addShip() { 
  //   this.ship.push(this.ship);
  // }


  draw(ctx) {
    ctx.clearRect(0, 0, 1000, 1000);
    ctx.fillStyle = "grey";
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