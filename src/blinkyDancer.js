
var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
// debugger;
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);

};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
  
  var randColor = function(){
    return Math.floor(Math.random() * 256);
  };
  var styleSettings = {
    border: "10px solid rgb(" + 
      randColor() + ',' + 
      randColor() + ',' + 
      randColor() + ')'};

  // Sets new CSS background color for this.$node
  this.$node.css(styleSettings);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  
}