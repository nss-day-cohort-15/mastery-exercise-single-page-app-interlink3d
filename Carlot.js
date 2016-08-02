var Carlot = (function () {
  var carToBe = []

  return {
    getInventory: function (cb) {
      var xhr = new XMLHttpRequest() //get data
      xhr.open('GET', 'inventory.json') 
      xhr.addEventListener('load', function (evt) {
        inventory = JSON.parse(evt.target.responseText) //store in private variable
      console.log("pulled inventory", inventory)  
        cb(inventory)  //execute callback
      })   
      xhr.send()  
    }
  }

}())

