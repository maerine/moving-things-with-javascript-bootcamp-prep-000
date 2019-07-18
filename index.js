const app = "I don't do much."

function pressIt() {
  $('#typing').on('keydown', function(key){
    if(key.which == 71){
      alert('You pressed g');
      }
  });
}

$(document).ready(function(){

  pressIt();

});