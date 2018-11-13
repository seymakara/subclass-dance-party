var BlueDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="BlueDancer"></span>');

  makeDancer.apply(this, arguments);

  console.log(this);
};

BlueDancer.prototype = Object.create(makeDancer.prototype);
BlueDancer.prototype.constructor = BlueDancer;

// BlueDancer.prototype.step = function() {
//   // call the old version of step at the beginning of any call to this new version of step
//   makeDancer.prototype.step.call(this);
//   this.$node.toggle();
  
  // var randColor = function(){
  //   return Math.floor(Math.random() * 256);
  // };
  // var styleSettings = {
  //   border: "10px solid rgb(" + 
  //     randColor() + ',' + 
  //     randColor() + ',' + 
  //     randColor() + ')'};

  // // Sets new CSS background color for this.$node
  // this.$node.css(styleSettings);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  
// }