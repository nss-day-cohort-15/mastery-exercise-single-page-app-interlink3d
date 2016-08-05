
function populatePage (loadedInventory) {
  var inventoryBox = document.querySelector('#inventoryBox .row')

  console.log(">>>>", loadedInventory)
  loadedInventory.forEach(function (car) {
    inventoryBox.innerHTML += 
    `<div class="col-md-4 success">
      <ul id="loadedCard" class="list-unstyled card cardToggle" style="border: 4px solid ${car.color}">
       <li><h2>${car.image}</h2></li>
       <li><h2>Make: ${car.make}</h2></li>
       <li><h3>Model: ${car.model}</h3></li>
       <li><h5>Year: ${car.year}<h5></li>
       <li><h5>Price: ${car.price}<h5></li>
       <li><h5>Color: ${car.color}<h5></li>
       <li><h5><u>Available: ${car.purchased}</u></h5></li>
       <li id="descId" class="descrip">Description: ${car.description}</li>
      </ul>
    </div>`
  })

loadingevents ()

}

Carlot.getInventory(populatePage);


