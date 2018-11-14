describe('BlueDancer', function() {

  // var blinkyDancer, clock;
  // var timeBetweenSteps = 100;

  beforeEach(function() {
    // clock = sinon.useFakeTimers();
    BlueDancer = new BlueDancer(10, 20);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });
});
