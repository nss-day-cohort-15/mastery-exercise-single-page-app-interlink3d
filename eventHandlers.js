var Carlot = (function (execute) {

execute.loadingevents = function () {
  console.log("loaded after DOM")
  var inputBox = document.getElementById("searchCrit");
  var modify = document.getElementById("showButton")
  var cards = document.getElementsByClassName("changes");

  // this code tags 3 cards to be able to access focus:

  for(var i=0; i<cards.length; i++) {
    cards[i].addEventListener('click', function(event){
      focusEvent (event);
    });
  }

  function clearStyles (){
    for (var i = 0; i < cards.length; i++) {
      cards[i].classList.remove('cardToggle');
      console.log("cleared")
    }
  }

  // start of changing card border and background color:

  function cardMorph() {
    (event.currentTarget).classList.add("cardToggle");
    console.log("added")
  }

  // code block for focusing and mirror event ---

  function focusEvent (event) {
    clearStyles ();
    inputBox.value = '';
    inputBox.focus();
    cardMorph ();
    mirror(event.currentTarget);
    // mirror(event);
  }

  function mirror(event){
    var description = event.querySelector('.descrip');
    // var cardSelected = event.querySelector('div ul');
    var cardSelected = event

    inputBox.addEventListener('keyup', function(){
      if (cardSelected.classList.contains('cardToggle')){
      description.innerHTML =  'Description: ' + inputBox.value;
      }
    })
  }

  modify.addEventListener("click", removeFocusClick);
  inputBox.addEventListener("keydown", removeFocusEnter);

  function removeFocusClick () {
      inputBox.value = '';
      inputBox.blur();

      for (var i = 0; i < cards.length; i++) {
      cards[i].classList.remove('cardToggle');
    }
  }

  function removeFocusEnter () {
    if (13 === event.keyCode) {
      inputBox.value = '';
      inputBox.blur();

      for (var i = 0; i < cards.length; i++) {
      cards[i].classList.remove('cardToggle');
      }
    }
  }
}

  return execute

}(Carlot))
