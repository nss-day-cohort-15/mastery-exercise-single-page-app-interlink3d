function showInventory (inventory) {
  var list= document.querySelector('.cars')

  cars.forEach(function (car) {
    list.innerHTML += `<li>${cars}</li>`
  })
}


Carlot.getInventory(showInventory);
