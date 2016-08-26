var Carlot = (function (execute) {

  execute.loadingevents = function () {
    // console.log("loaded after DOM")
    var inputBox = document.getElementById("searchCrit");
    var cards = document.getElementsByClassName("changes");

    // this code tags 3 cards to be able to access focus:

    for(var i=0; i<cards.length; i++) {
      cards[i].addEventListener('click', function(event){
        focusEvent (event);
      });
    };

    // code block for focusing and executing styling functions

    function focusEvent (event) {
      inputBox.value = '';
      inputBox.focus();
      Carlot.clearStyles (cards);
      Carlot.cardMorph (event, "color");
      Carlot.mirror(event.currentTarget);
    };
  };

  return execute

}(Carlot))
