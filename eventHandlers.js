// 1. When you click on one of the car elements, 
// change the width of the border to a higher value, 
//and change the background color to any other color of your choosing.



// function loadingevents () {
//   console.log("loaded after DOM")
//   function cardMorph() {
//     document.getElementsByClassName("card").classList.toggle("cardToggle");
//   }
// }

// document.getElementById("loadedCard").addEventListener("click", cardMorph);



// 1. Also, on click of the car element, clear the value of
// the text input in the navbar, and put the [cursor in the text input]
// (https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus).


function loadingevents () {
document.querySelector(".descId").addEventListener("click", focusEvent);

function focusEvent () {
    document.getElementById("searchCrit").focus();
  };
}



// 1. When you start typing into the navbar's text input, 
// the description of the currently selected car should be 
// bound to what you are typing in and match it exactly.


