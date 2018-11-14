// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  // debugger;
  // var dancer = {};

  // use jQuery to create an HTML <span> tag
  // dancer.$node = $('<span class="dancer"></span>');

  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = this.$node || $('<span class="dancer"></span>') ;
  this.step();
  this.setPosition(top, left);
  // window.dancers.push(this);

};

makeDancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var fn = this
  setTimeout(fn.step.bind(fn), fn.timeBetweenSteps);
}

// let dancer = makeDancer.prototype.step.bind()

makeDancer.prototype.setPosition = function(top, left){
  var styleSettings = {
      top: top,
      left: left
    };
  
  this.$node.css(styleSettings);
}

makeDancer.prototype.lineUp = function(top, left){
  console.log($(window).height());
  
  var styleSettings = {
    top: top,
    left: left,
  };
  this.$node.css(styleSettings);
  
}

makeDancer.prototype.breakLine = function() {
  // Call setPosition with random X and Y coordinates
  this.setPosition($('body').height() * Math.random(), $('body').width() * Math.random());
};
