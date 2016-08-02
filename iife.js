
function populatePage (carLot) {
  var carList= document.querySelector('#inventoryBox')
  var cars = []

  carToBe.forEach(function (car) {
    carList.innerHTML += `<li>${carsDisplay}</li>`
  })
}


Carlot.getInventory();

