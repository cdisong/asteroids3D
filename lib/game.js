const Asteroid = require("./asteroid");


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