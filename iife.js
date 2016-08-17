var Carlot = (function (onScreen) {

onScreen.populatePage = function ()  {
  var inventoryBox = document.querySelector('#inventoryBox')
  var inventToLoad = onScreen.getJson()

  console.log(">>>>", inventToLoad)

  var start = ""

  inventToLoad.forEach(function (car, i){
  if (i % 3 === 0){
    start += `<div class="row">`
  };

    start +=
    `<div class="col-md-3 success">
      <ul id="loadedCard" class="list-unstyled changes card " style="border-color: ${car.color}">
       <li><h2>Make: ${car.make}</h2></li>
       <li><h3>Model: ${car.model}</h3></li>
       <li><h5>Year: ${car.year}<h5></li>
       <li><h5>Price: ${car.price}<h5></li>
       <li><h5>Color: ${car.color}<h5></li>
       <li><h5><u>Available: ${car.purchased}</u></h5></li>
       <li class="descrip">Description: ${car.description}</li>
      </ul>
    </div>`

  if ((i + 1) % 3 === 0){
    start += `</div>`
  };

    inventoryBox.innerHTML = start

})

  Carlot.loadingevents ()

}

  return onScreen

})(Carlot)

Carlot.getInventory(Carlot.populatePage);


