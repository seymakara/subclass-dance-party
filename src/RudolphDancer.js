var RudolphDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="RudolphDancer"></span>');

  makeDancer.apply(this, arguments);

  console.log(this);
};

RudolphDancer.prototype = Object.create(makeDancer.prototype);
RudolphDancer.prototype.constructor = RudolphDancer;