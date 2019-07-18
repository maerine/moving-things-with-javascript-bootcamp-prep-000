const app = "I don't do much."

var dodger = document.getElementById('dodger')

function pressIt() {
  $('#game').on('keydown', function(key){
    if(key.which == 71){
      alert('You pressed g');
      }
  });
}

$(document).ready(function(){

  pressIt();

});