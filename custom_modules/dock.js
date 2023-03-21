// Пристань 
class Dock {
  
  constructor (name, port) { 

    this.name = name; 
    this.port = port; 
    this.ship = null; // корабель, що знаходиться на цій пристані 

    if (typeof name === 'undefined') { this.name = "Невідома пристань"; }

  }

}

// Список усіх пристаней
let global_docks_list = new Array();

// Знаходження пристані
function find_Dock (name, port) {

  for (let id = 0; id < global_docks_list.length; id++) {

      let dock = global_docks_list[id];

      if (name === dock.name &&
          port === dock.port) { return dock; }

  }

  return -1;

}

// Додавання пристані
function add_Dock(name, port) {

  let dock = new Dock(name, port);
  global_docks_list.push(dock);

  return dock;

}

// Видаляння пристані
function remove_Dock(name, port) {

  let dock = find_Dock(name, port);

  if (dock === -1) { return -1; }

  let id = global_docks_list.indexOf(dock);
  global_docks_list.splice(id, 1);

  return 1;

}

// Прибуття корабля на пристань 
function arrive_Ship(ship, dock) { 
  
  if (ship.dock) { // якщо корабель вже на пристані, то він спочатку повинен відбути 
  
  leave_Ship(ship); 
  
  } 
  
  ship.dock = dock; 
  dock.ship = ship; 

} 
   
  // Відбуття корабля від пристані 
function leave_Ship(ship) { 
  
  let dock = ship.dock; 
  
  if (dock) { 
    
  dock.ship = null; 
  ship.dock = null;

 } 

} 

// Пошук усіх кораблів на пристані 
function find_Ships_On_Dock(dock) { 
  
  return global_docks_list.filter(function(ship) { 
  
    return ship.dock === dock;
  
  }); 

}

// Отримання списку пристаней
function get_Docks_List () {

  console.log("\n" + `Список усіх пристаней:`);

  for (let id = 0; id < global_docks_list.length; id++) {

      let dock = global_docks_list[id];
      console.log(`\tІм'я пристані: ${dock.name}, порт який належить пристані: ${dock.port}`);

  }

  console.log();
  
  return global_docks_list;

}

// Експортуємо функції
exports.Dock = Dock
exports.find_Dock = find_Dock;
exports.add_Dock = add_Dock;
exports.remove_Dock = remove_Dock;
exports.arrive_Ship = arrive_Ship;
exports.leave_Ship = leave_Ship;
exports.find_Ships_On_Dock = find_Ships_On_Dock;
exports.get_Docks_List = get_Docks_List;
