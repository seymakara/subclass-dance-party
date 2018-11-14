describe('BlueDancer', function() {


  beforeEach(function() {
    BlueDancer = new BlueDancer(10, 20);
  });

  it('should have a jQuery $node object', function() {
    expect(BlueDancer.$node).to.be.an.instanceof(jQuery);
  });

});

