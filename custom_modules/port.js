// Порт 
class Port {

 constructor (name, country) { 
  
    this.name = name; 
    this.country = country; 
    this.docks = [] // масив пристаней, що належать до цього порту 
    this.ships = [] // масив кораблів, що належать до цього порту 
    
    if (typeof name === 'undefined') { this.name = "Невідомий порт"; }
    if (typeof country === 'undefined') { this.country = "Невідома країна"; }
  
 } 
  
}

  
// Список усіх кораблів
let global_ports_list = new Array();

// Знайти лікарню в колекції
function find_Port(name, country) {

    for (let port_1 of global_ports_list) {

        if (name === port_1.name &&
            country === port_1.country) { return port_1; }

    }

    return -1;

}

// Додавання нової лікарні
function add_Port(name, country) {

    let port1 = new Port(name, country);
    global_ports_list.push(port1);

    return port1;

}

// Видалити лікарню з колекції
function remove_Port(name, country) {

    for (let id = 0; id < global_ports_list.length; id++) {

        let port_11 = global_ports_list[id];

        if (port_11.name === name &&
            port_11.country === country) { global_ports_list.splice(id, 1);
                                            return 1; }

    }

    return -1;

}

// Редагувати лікарню в колекції
function edit_Port(name, country, new_name, new_country) {

    for (let id = 0; id < global_ports_list.length; id++) {

        let port11 = global_ports_list[id];

        if (port11.name === name &&
            port11.country === country) { global_ports_list[id].name = new_name;
                                            global_ports_list[id].country = new_country;
                                            return 1; }

    }

    return -1;

}

// Отримати список лікарень
function get_Ports_List() {

    console.log("\n" + "Список усіх портів:");

    for (let id = 0; id < global_ports_list.length; id++) {

        let portt = global_ports_list[id];
        console.log(`Назва порта: ${portt.name}, країна порта: ${portt.country}`);

    }

    console.log();
    
    return global_ports_list;

}

// Експортуємо функції

exports.find_Port = find_Port;
exports.add_Port= add_Port;
exports.remove_Port = remove_Port;
exports.edit_Port = edit_Port;
exports.get_Ports_List = get_Ports_List;
