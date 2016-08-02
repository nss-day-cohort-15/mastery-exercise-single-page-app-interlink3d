
function populatePage (loadedInventory) {
  var carList= document.querySelector('#inventoryBox')

  console.log(">>>>", loadedInventory)
  loadedInventory.forEach(function (car) {
    carList.innerHTML += 
    `<li><h3>${car.make}</h3></li>
     <li><h4>${car.model}</h4></li>
     <li><h4>${car.year}</h4></li>
     <li><h4>${car.price}</h4></li>
     <li><h5>${car.color}</h5></li>
     <li><h5>${car.purchased}</h5></li>
     <li><p>${car.description}</p></li>`

  })
}

Carlot.getInventory(populatePage);


