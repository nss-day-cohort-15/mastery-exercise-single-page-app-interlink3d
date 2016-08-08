// 1. When you click on one of the car elements, 
// change the width of the border to a higher value, 
//and change the background color to any other color of your choosing.

// --- The final IIFE should augment the object with two more functions. 
// One function resets the border thickness and background color for each 
// car element back to the original values. The other function changes the 
// thickness of the border of a car element, and changes its background color. 
// The function must accept two arguments.

//    1. A car DOM element that was clicked on.
//    1. A color name.

var Carlot = (function (execute) {

execute.loadingevents = function () {
  console.log("loaded after DOM")



  

  var mod = document.getElementById('showButton');
  mod.addEventListener('click', removeKeyupListener)


  // this code in between this block works good to tag 3 cards for focus:

  var carCard = document.getElementsByClassName('success');

  for(var i=0; i<carCard.length; i++) {
    carCard[i].addEventListener('click', function(){
      clearBox ()
      focusEvent(event);
    });
  }

  function focusEvent () {
    console.log(event.currentTarget)
    // clearBox ()
    // addKeyupListener(event.currentTarget)
    test(event.currentTarget)
    // removeKeyupListener()
  }

  function test(evt){
    var x = evt.querySelector('ul li.descrip');
    var y = evt.querySelector('ul');
    console.log(x)
    var inputBox = document.getElementById("searchCrit");
    inputBox.addEventListener('keyup', function(){
      if (!y.classList.contains('card')){
      x.innerHTML = inputBox.value;
      }
    })
  }

  // end of code block for focus ---

  // duplicates text entered into box into the DOM:

  function addKeyupListener (carBox) {
    var inputBox = document.getElementById("searchCrit");

    inputBox.addEventListener('keyup', function () {
      var descript = carBox.querySelector('ul li.descrip')
      descript.innerHTML = 'Description: ' + inputBox.value;
    })
  }
  
  // end of duplicating input box text 

  function removeKeyupListener () {
    // remove keyup event when another card is clicked and or
    // modify button is clicked
    var inputBox = document.getElementById("searchCrit");
    inputBox.removeEventListener('keyup', function(){});
  }
    
    function clearBox () {
      var inputBox = document.getElementById("searchCrit");  
      inputBox.value = '';
      inputBox.focus()  
      }

  // start of changing card border and background color:


  function cardMorph() {
  (event.currentTarget).classList.toggle("card");  
  };

    var cards3 = document.getElementsByClassName("changes");
    for (var i = 0; i < 3; i++) {
      cards3[i].addEventListener('click', cardMorph)
    }
  // end of changing card border and color --- 

 }
  
  return execute

}(Carlot))

