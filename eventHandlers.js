var Carlot = (function (execute) {

execute.loadingevents = function () {
  console.log("loaded after DOM")
  var inputBox = document.getElementById("searchCrit");
  var carCard = document.getElementsByClassName("success");
  var modify = document.getElementById("showButton")
  var cards = document.getElementsByClassName("changes");

  // this code tags 3 cards to be able to access focus:

  for(var i=0; i<carCard.length; i++) {
    carCard[i].addEventListener('click', function(){
      focusEvent(event);
    });
  }

// code block for focusing and mirror event ---

  function focusEvent (event) {
    inputBox.value = '';
    inputBox.focus(); 
    mirror(event.currentTarget);
  }

  function mirror(event){
    var description = event.querySelector('ul li.descrip');
    var cardSelected = event.querySelector('ul');
   
    inputBox.addEventListener('keyup', function(){
      if (!cardSelected.classList.contains('card')){
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
      cards[i].classList.add('card');
    } 
  }
  
  function removeFocusEnter () {
    if (13 === event.keyCode) {
      inputBox.value = '';
      inputBox.blur();

      for (var i = 0; i < cards.length; i++) {
      cards[i].classList.add('card');       
    }
  }
}
  // start of changing card border and background color:

  function cardMorph() {
    (event.currentTarget).classList.toggle("card");  
  };

    for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', cardMorph)
    }

 }

  return execute

}(Carlot))
