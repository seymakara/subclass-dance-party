describe('RudolphDancer', function() {


  beforeEach(function() {
    RudolphDancer = new RudolphDancer(10, 20);
  });

  it('should have a jQuery $node object', function() {
    expect(RudolphDancer.$node).to.be.an.instanceof(jQuery);
  });

});

