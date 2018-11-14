var JingleDancer = function(top, left, timeBetweenSteps){

  makeDancer.call(this, top, left, timeBetweenSteps);


  this.$node.addClass('JingleDancer');
};

// Import the methods of the Dancer superclass
JingleDancer.prototype = Object.create(makeDancer.prototype);

// Reset the constructor to of JingleDancer to JingleDancer
JingleDancer.prototype.constructor = JingleDancer;

// Call the Dancer step method, which repeatedly calls the step method
JingleDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);

  // Creates random y and x coordinates
  var randY = $("body").height() / 3 * (2 * Math.random() - 1);
  var randX = $("body").width() / 3 * (2 * Math.random() - 1);

  // Changes JingleDancer's position with animate transition (in style.css)
  setTimeout(function(){

    // JingleDancer's current x and y coordinates
    var currentY = this.$node.position().top;
    var currentX = this.$node.position().left;

    // Calls the Dancer superclass setPosition method with new x and y coordinates
    makeDancer.prototype.setPosition.call(this, currentY + randY, currentX + randX);

  }.bind(this), 0);

  // X and Y coordinates for center of JingleDancer
  var $nodeNewX = this.$node.position().left + 50;
  var $nodeNewY = this.$node.position().top + 50;

  // Iterates through each dancer in the global "dancers" array
  window.dancers.forEach(function(dancer) {

    // Only perform actions for instances of JingleDancer
    if (dancer instanceof JingleDancer){
      
      // X and Y coordinates for center of each JingleDancer
      var dancerNewX = dancer.$node.position().left + 50;
      var dancerNewY = dancer.$node.position().top + 50;

      // Calculates distance between JinglemakeDancers
      var dist = Math.sqrt(Math.pow(($nodeNewX - dancerNewX), 2) + Math.pow(($nodeNewY - dancerNewY),2));
      
      // Logic for when JingleDancers collide with one another
      var dancerCollision = dist !== 0 && dist <= 100;

      // Logic for when JingleDancers collide with the wall
      var wallCollision = 
        dancerNewX - 50 <= 0 || 
        dancerNewX + 50 >= $("body").width() || 
        dancerNewY - 50 <= 0 || 
        dancerNewY + 50 >= $("body").height();
      
      // When JingleDancers collide with one another, trigger sound and bounce back
      if (dancerCollision){
          $('.collision-sound').attr('src', 'sleighbells2.wav');
          randY = -3 * randY;
          randX = -3 * randX;
      }

      // When JingleDancers collide with the wall, transition to new X and Y coordinates
      if (wallCollision){ 
        dancer.setPosition(
          Math.random() * $("body").height(), 
          Math.random() * $("body").width()
        );
      }
    }
  });

  // Reset the HR logo size
  var styleSettings = {
    height: 100,
    width: 100
  };
  this.$node.css(styleSettings);

  // On mouseover, grow the HR logo size
  var self = this;
  $('.hr').on('mouseover', function() {
    var styleSettings = {
      height: 200,
      width: 200
    };
    self.$node.css(styleSettings);
  });
};