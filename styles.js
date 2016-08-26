var Carlot = (function (execute) {

  var inputBox = document.getElementById("searchCrit");
  var modify = document.getElementById("showButton")

  execute.clearStyles = function (cards){
    for (var i = 0; i < cards.length; i++) {
      cards[i].classList.remove('cardToggle');
      // console.log("cleared")
    };
  };

  // start of changing card border and background color:

  execute.cardMorph = function (event, color) {
    (event.currentTarget).classList.add("cardToggle");
    // console.log("added")
  };

  execute.mirror = function (event){
    var description = event.querySelector('.descrip');
    var cardSelected = event

    inputBox.addEventListener('keyup', function(){
      if (cardSelected.classList.contains('cardToggle')){
      description.innerHTML =  'Description: ' + inputBox.value;
      };
    });
  };

  modify.addEventListener("click", removeFocusClick);
  inputBox.addEventListener("keydown", removeFocusEnter);

  function removeFocusClick (cards) {
      inputBox.value = '';
      inputBox.blur();

      for (var i = 0; i < cards.length; i++) {
      cards[i].classList.remove('cardToggle');
    };
  };

  function removeFocusEnter (cards) {
    if (13 === event.keyCode) {
      inputBox.value = '';
      inputBox.blur();

      for (var i = 0; i < cards.length; i++) {
      cards[i].classList.remove('cardToggle');
      };
    };
  };

  return execute

}(Carlot))
