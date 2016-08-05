// 1. When you click on one of the car elements, 
// change the width of the border to a higher value, 
//and change the background color to any other color of your choosing.

function loadingevents () {


// function loadingevents () {
  console.log("loaded after DOM")
  function cardMorph() {
    document.getElementById("loadCard").classList.toggle("cardToggle");
  
document.getElementById("loadedCard").addEventListener("click", cardMorph);
}


// 1. Also, on click of the car element, clear the value of
// the text input in the navbar, and put the [cursor in the text input]
// (https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus).


'ul'.onclick = function(event) {
    event = event || window.event // cross-browser event
    
    if (event.stopPropagation) {
        // W3C standard variant
        event.stopPropagation()
    } else {
        // IE variant
        event.cancelBubble = true
    }
  }

var target = event.target || event.srcElement

// target.addEventListener('click', focusEvent);

// document.getElementById("descId").addEventListener('click', focusEvent);

// this code in between this block works good to tag al UL elements

var carD = document.getElementsByTagName('ul')

for(var i=0; i<carD.length; i++) {
  carD[i].onclick = function(e) {
    e = e || event
    var target = e.target || e.srcElement

    this.addEventListener('click', focusEvent);  
  }

};


function focusEvent () {
    document.getElementById("searchCrit").focus();
  };

// end of code block for focus ---

var inputBox = document.getElementById("searchCrit");

var descrip = document.getElementById("descId")

for(var i=0; i<descrip.length; i++) {
  descrip[i].onclick = function(e) {
    e = e || event
    var target = e.target || e.srcElement

    this.addEventListener('click', inputBox.onkeyup);  
  }

}

inputBox.onkeyup = function(){
    document.getElementById("descId").innerHTML = inputBox.value;
};

}


// click target event listeners and remove event listener 

// 1. When you start typing into the navbar's text input, 
// the description of the currently selected car should be 
// bound to what you are typing in and match it exactly.


