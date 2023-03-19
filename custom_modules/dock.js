const ports_list = require('./port'); 

// Пристань 
class Dock {
  
  constructor (name, port) { 

    this.name = name; 
    this.port = port; 
    this.ship = null; // корабель, що знаходиться на цій пристані 

    if (typeof name === 'undefined') { this.name = "Невідома пристань"; }

  }

}

// Додавання пристані до порту 
function addDock (name, port) { 
  let dock = new Dock(name, port); 
  ports_list.docks.push(dock); 

  return dock; 

}

// Видалення пристані із порту 
function removeDock(dock) { 
  let index = ports_list.docks.indexOf(dock); 
  if (index !== -1) { 
    ports_list.docks.splice(index, 1); 
  } 
  let port1 = dock.port; 
  if (port1 && ports_list.docks) { 
    index = ports_list.docks.indexOf(dock); 
    if (index !== -1) { 
      ports_list.docks.splice(index, 1); 
    } 
  }
}


// Прибуття корабля на пристань 
function arriveShip(ship, dock) { 
    if (ports_list.docks) { // якщо корабель вже на пристані, то він спочатку повинен відбути 
      leaveShip(ship); 
    } 
    ports_list.docks = dock; 
    dock.ship = ship; 
} 
     
// Відбуття корабля від пристані 
function leaveShip() { 
    let dock = ports_list.docks; 
    if (dock) { 
      dock.ship = null; 
      ports_list.docks = null; 
    } 
} 
     
// Пошук усіх кораблів на пристані 
function findShipsOnDock(dock) { 
    return ports_list.docks.filter(function(ship) { 
      return ports_list.docks === dock; 
    }); 
}

// Отримання списоку пристаней
function get_Docks_List() {

  console.log("\n" + `Список усіх кораблів на пристані: ${ports_list.name}`);

  for (let id = 0; id < ports_list.docks.length; id++) {

      let dock = ports_list.docks[id];
      console.log(`Назва пристані: ${dock.name}, порт до якого належить пристань: ${dock.port}`);

  }

  console.log();
  
  return ports_list.docks;

}


exports.Dock = Dock;
exports.addDock = addDock;
exports.removeDock = removeDock;
exports.arriveShip = arriveShip;
exports.findShipsOnDock = findShipsOnDock;
exports.get_Docks_List = get_Docks_List; 