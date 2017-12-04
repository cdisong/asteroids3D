# Asteroids3D


## Background and Overview 
Asteroids3D is a game based on the original Asteroids arcade game where users control a spaceship to avoid obstacles flying towards them in space. Users can also hit the space bar to fire lasers; hitting an asteroid can break the asteroid into smaller parts but cannot destroy it completely. Instead of the animation being 2D, it will appear as though the spaceship is flying into the game, as obstacles fly out in successive z-index increments (increments/frame depending on speed of asteroid). 

##Functionality & MVP
* Users will be able to start, end, pause, and restart game.
* Navigate game, clearly telling which obstacles are further away, nearing, and passed. 
* Fire lasers to destroy incoming obstacles. 


##Wireframes 
Asteroids3D will be a single page game with game start and end buttons. 
Visual cues such as color, overlapping, visibility of details on asteroids will indicate to player which asteroids are close by and which are further away. Spaceship will be placed at approximately z-index 7 of 10, asteroids at z-index 8+ will not affect gameplay beyond vision. Collisions may happen once asteroid is on same z-index as spaceship. 

![](https://github.com/cdisong/asteroids3D/blob/master/lib/wireframe%20asteroids3D.png)

##Architecture and Technologies 
* Vanilla JavaScript for game logic. 
* Canvas for DOM manipulation, object animation and rednering. 
* Webpack 

* `util.js` 
  * Handle math 
* `moving_object.js`
  * Baseclass for movement. 
* `asteroid.js` 
  * Asteroid inherits from MovingObject class. 
* `laser.js` 
  * Laserbeam inherits from MovingObject class. 
* `ship.js` 
  * Spaceship, also inherits from MovingObject class. 
* `game.js` 
  * Draws game, moves objects, checks collisions. 
* `game_view.js`
  * Animates movement, holds canvas elemnt.
*  `asteroids3D.js` 
  * Entry file.
  
 
##Implementation Timeline 
### Day 1
Set up MovingObject class, (constructor function), make Asteroid, Laser, and Ship all inherit from it. 
Include asteroids colliding with ship, laser colliding with asteroid, and asteroid colliding with asteroid. 
Write out skeleton for Asteroid, Laser, and Ship. 
Design ship on canvas. 

### Day 2 
Handle physics of movement for Asteroid, Laser, and Ship. 

### Day 3
Connect firing of Laser to Ship.

### Day 4 
Handle animation. 
