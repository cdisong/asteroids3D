const Asteroid = require("./asteroid");


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