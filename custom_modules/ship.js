const port_list = require('./port'); 

// Корабель 
class Ship {
    
  constructor (name, country, size) { 
      
    this.name = name; 
    this.country = country; 
    this.size = size; 

    if (typeof name === 'undefined')    { this.name = "Невідомий корабель"; }
    if (typeof country === 'undefined')    { this.country = "Невідома країна"; }
    if (typeof size === 'undefined')    { this.size = "Невідомий розмір"; }
    
  } 

}

// Додавання корабля в колекцію 
function addShip(name, country, size) { 
    let ship = new Ship(name, country, size); 
    port_list.ships.push(ship); 
    return ship; 
  } 
   
let ship1 = addShip('Titanic', 'United Kingdom', 882);
console.log('Доданий корабель:', ship1);

// Редагування корабля в колекції 
function editShip(ship, name, country, size) { 
    ship.name = name; 
    ship.country = country; 
    ship.size = size; 
    return ship; 
  } 
   
// Видалення корабля з колекції 
function removeShip(ship) { 
    var index = port_list.ships.indexOf(ship); 
    if (index !== -1) { 
      port_list.ships.splice(index, 1); 
    } 
} 
   
// Пошук одного корабля в колекції 
function findShip(name) { 
    return port_list.ships.find(function(ship) { 
      return ship.name === name; 
    }); 
}

// Отримання списку кораблів
function get_Ships_List() {

  console.log("\n" + "Список усіх кораблів:");

  for (let id = 0; id < port_list.ships.length; id++) {

      let ship = port_list.ships[id];
      console.log(`Назва корабля: ${ship.name}, країна корабля: ${ship.country}, розмір корабля: ${ship.size}`);

  }

  console.log();
  
  return port_list.ships;

}

exports.Ship = Ship;
exports.addShip = addShip;
exports.editShip = editShip;
exports.removeShip = removeShip;
exports.findShip = findShip;
exports.get_Ships_List = get_Ships_List;