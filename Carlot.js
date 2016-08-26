var Carlot = (function () {
  var inventory = []

  return {
    getInventory: function (callback) {
      var xhr = new XMLHttpRequest(); //get data
      xhr.open('GET', 'inventory.json')
      xhr.addEventListener('load', function (evt) {
        inventory = (JSON.parse(xhr.responseText).cars); //store in private variable
      // console.log('pulled inventory', inventory)
        callback(inventory);
        // cb(JSON.parse(evt.target.responseText))  //execute callback
      })
      xhr.send();
    },
    getJson: function () {
      return inventory;
    }
  };

}())
