$(document).ready(function(){

  $('#getting-started').countdown('2030/01/01', function(event) {

      $(this).html(event.strftime('<div><span>%D</span><span>Days</span></div> <div><span>%H</span><span>Hours</span></div> <div><span>%M</span><span>Munites</span></div> <div><span>%S</span><span>Seconds</span></div>'));
    });

});
