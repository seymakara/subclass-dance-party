describe('RudolphDancer', function() {

  var RudolphDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    RudolphDancer = new RudolphDancer(10, 20);
  });

  it('should have a jQuery $node object', function() {
    expect(RudolphDancer.$node).to.be.an.instanceof(jQuery);
  });
});
