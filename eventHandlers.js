var Carlot = (function (execute) {

execute.loadingevents = function () {
  console.log("loaded after DOM")
  var inputBox = document.getElementById("searchCrit");
  var carCard = document.getElementsByClassName('success');
  var modify = document.getElementById("showButton")
  modify.addEventListener("click", removeFocusClick); 
  inputBox.addEventListener("keydown", removeFocusEnter);

  // this code tags 3 cards to be able to access focus:

  for(var i=0; i<carCard.length; i++) {
    carCard[i].addEventListener('click', function(){
      focusEvent(event);
    });
  }

// code block for focusing and mirror event ---

  function focusEvent () {
    inputBox.value = '';
    inputBox.focus()
    mirror(event.currentTarget)
  }

  function mirror(evt){
    var description = evt.querySelector('ul li.descrip');
    var cardSelected = evt.querySelector('ul');
   
    inputBox.addEventListener('keyup', function(){
      if (!cardSelected.classList.contains('card')){
      description.innerHTML =  'Description: ' + inputBox.value;
      }
    })
  
  }
    
  function removeFocusClick (m) {
      inputBox.value = '';
      inputBox.blur();
  }
  
  function removeFocusEnter (e) {
    if (13 === e.keyCode) {
      inputBox.value = '';
      inputBox.blur()
    }
  }

  // start of changing card border and background color:

  function cardMorph() {
    (event.currentTarget).classList.toggle("card");  
  };

    var cards3 = document.getElementsByClassName("changes");
    for (var i = 0; i < 3; i++) {
      cards3[i].addEventListener('click', cardMorph)
    }

 }

  return execute

}(Carlot))
