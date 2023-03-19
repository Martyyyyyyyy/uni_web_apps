// Порт 
class Port {

  constructor (name, country) { 

    this.name = name; 
    this.country = country; 
    this.docks = new Array() // масив пристаней, що належать до цього порту 
    this.ships = new Array() // масив кораблів, що належать до цього порту 
  
    if (typeof name === 'undefined') { this.name = "Невідомий порт"; }
    if (typeof country === 'undefined') { this.country = "Невідома країна"; }

  } 

}

// Список усіх кораблів
let global_ports_list = new Array();

// Додавання нового порту в колекцію 
function addPort(name, country) { 
  let port = new Port(name, country); 
  global_ports_list.push(port); 
  return port; 
} 
 
// Редагування порту в колекції 
function editPort(port, name, country) { 
  port.name = name; 
  port.country = country; 
  return port; 
} 
 
// Видалення порту з колекції 
function removePort(port) { 
  let index = global_ports_list.indexOf(port); 
  if (index !== -1) { 
    global_ports_list.splice(index, 1); 
  } 
} 
 
// Пошук одного порту в колекції 
function findPort(name) { 
  return global_ports_list.find(function(port) { 
    return port.name === name; 
  }); 
}

// Отримання списоку портів
function get_Ports_List() {

  console.log("\n" + "Список усіх портів:");

  for (let id = 0; id < global_ports_list.length; id++) {

      let port = global_ports_list[id];
      console.log(`Назва порта: ${port.name}, країна порта: ${port.country}`);

  }

  console.log();
  
  return global_ports_list;

}

exports.Port = Port;
exports.addPort = addPort;
exports.editPort = editPort;
exports.removePort = removePort;
exports.findPort = findPort;
exports.get_Ports_List = get_Ports_List;
