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

function loadingevents () {
  console.log("loaded after DOM")

  
  function removeKeyupListener () {
    // remove keyup event when another card is clicked and or
    // modify button is clicked
    var modify = document.getElementsByClassName('btn');
    (event.currentTarget).removeEventListener('keyup', focusEvent);
    modify.addEventListener('click', removeKeyupListener)
  
  function clearBox () {
    var inputBox = document.getElementById("searchCrit");  
    inputBox.value = '';

    var modify = document.getElementsByClassName('btn');
    modify.addEventListener('click', clearBox)
  }

  
  // modify.addEventListener('click', )
  


  }

  // 1. Also, on click of the car element, clear the value of
  // the text input in the navbar, and put the [cursor in the text input]
  // (https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus).


  // this code in between this block works good to tag 3 cards for focus:

  var carCard = document.getElementsByClassName('success');

  for(var i=0; i<carCard.length; i++) {
    carCard[i].addEventListener('click', focusEvent);
  }

  function focusEvent () {
    document.getElementById("searchCrit").focus();
    addKeyupListener(event.currentTarget)
  }

  // end of code block for focus ---

  // duplicates text entered into box into the DOM:

  function addKeyupListener (carBox) {
    var inputBox = document.getElementById("searchCrit");

    inputBox.addEventListener('keyup', function () {
      carBox.querySelector('.descrip').innerHTML = 'Description: ' + inputBox.value;
    })
  }
  
  // end of duplicating input box text 

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

// click target event listeners and remove event listener 

// 1. When you start typing into the navbar's text input, 
// the description of the currently selected car should be 
// bound to what you are typing in and match it exactly.


