$(document).ready(function() {
  window.dancers = [];

  $('body').on('click', '.BlueDancer', function(event) {
    $(this).toggleClass('BlueDancer');
  })

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    console.log("this on click", $(this).data('dancer-maker-function-name'))
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

  });

  $(".lineUpButton").on("click", function(event){
    var gap = ($(window).height()) / window.dancers.length
    // Iterates through each dancer in the global "dancers" array
    // window.dancers.forEach(function(dancer){
    //   // Calls the lineUp method for each dancer
      
    var top;
    var distance;
    var counterBlueDancer = 0;
    var counterRudolphDancer = 0;
    var counterBlinkyDancer = 0;
    
    for (var i = 0; i < window.dancers.length; i++) {

      if (window.dancers[i] instanceof BlueDancer) {
        distance = gap * counterBlueDancer;
        top = 100;
        counterBlueDancer++
        
      } else if (window.dancers[i] instanceof makeBlinkyDancer) {
        distance = gap * counterBlinkyDancer;
        top = 500;
        counterBlinkyDancer++
      } else if (window.dancers[i] instanceof RudolphDancer) {
        distance = gap * counterRudolphDancer;
        top = 300;
        counterRudolphDancer++
      }

      window.dancers[i].lineUp(top, distance)
            
    }
    
  });
  
  $('.breakLineButton').on('click', function() {
    window.dancers.forEach(function(dancer) {
      // Calls the breakLine method for each dancer
      dancer.breakLine();
    });
  });

});

