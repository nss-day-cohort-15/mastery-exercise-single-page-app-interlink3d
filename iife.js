
function showInventory (carToBe) {
  var list= document.querySelector('.carsDisplay')

  carToBe.forEach(function (car) {
    list.innerHTML += `<li>${inventories}</li>`
  })
}


Carlot.getInventory(showInventory);
