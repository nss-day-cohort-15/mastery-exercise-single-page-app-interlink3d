
function populatePage (loadedInventory) {
  var inventoryBox = document.querySelector('#inventoryBox .row')

  console.log(">>>>", loadedInventory)
  loadedInventory.forEach(function (car) {
    inventoryBox.innerHTML += 
    `<div class="col-md-4 success">
      <ul id="loadedCard" class="list-unstyled card cardToggle">
       <li><h2>${car.make}</h2></li>
       <li><h3>${car.model}</h3></li>
       <li><h5>${car.year}<h5></li>
       <li><h5>${car.price}<h5></li>
       <li><h5>${car.color}<h5></li>
       <li><h5><u>${car.purchased}</u></h5></li>
       <li id="descId" class="descrip">${car.description}</li>
      </ul>
    </div>`
  })
alert("domloaded")

loadingevents ()

}

Carlot.getInventory(populatePage);


