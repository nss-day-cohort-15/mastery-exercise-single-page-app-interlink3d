var Carlot = (function (onScreen) {

onScreen.populatePage = function ()  {
  var inventoryBox = document.querySelector('#inventoryBox .row')
  var inventToLoad = onScreen.getJson()

  console.log(">>>>", inventToLoad)
  inventToLoad.forEach(function (car) {
    inventoryBox.innerHTML += 
    `<div class="col-md-3 success">
      <ul id="loadedCard" class="list-unstyled changes card cardToggle" style="border-color: ${car.color}">
       <li><h2>Make: ${car.make}</h2></li>
       <li><h3>Model: ${car.model}</h3></li>
       <li><h5>Year: ${car.year}<h5></li>
       <li><h5>Price: ${car.price}<h5></li>
       <li><h5>Color: ${car.color}<h5></li>
       <li><h5><u>Available: ${car.purchased}</u></h5></li>
       <li class="descrip">Description: ${car.description}</li>
      </ul>
    </div>`
  })

  Carlot.loadingevents ()

}

  return onScreen

})(Carlot)

Carlot.getInventory(Carlot.populatePage);


