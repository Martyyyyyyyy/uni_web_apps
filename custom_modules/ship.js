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

// Список усіх кораблів
let global_ships_list = new Array();

// Пошук одного корабля в колекції 
function find_Ship (name, country, size) {

    for (let id = 0; id < global_ships_list.length; id++) {

        let ship_1 = global_ships_list[id];

        if (name === ship_1.name && country === ship_1.country && size === ship_1.size) 
        { return ship_1; }

    }

    return -1;

}

// Додавання нового лікаря
function add_Ship (name, country, size) {

    let ship1 = new Ship(name, country, size);
    global_ships_list.push(ship1);

    return ship1;

}

// Видалення лікаря з лікарні
function remove_Ship (name, country, size) {

    let ship11 = find_Ship(name, country, size);

    if (ship11 === -1) { return -1; }

    let id = global_ships_list.indexOf(ship11);
    global_ships_list.splice(id, 1);

    return 1;

}

// Редагувати лікаря в лікарні
function edit_Ship (name, country, size, new_name, new_country, new_size) {

    let shipp = find_Ship(name, country, size);

    if (shipp === -1) { return -1; }

    let id = global_ships_list.indexOf(shipp);
    
    global_ships_list[id].name = new_name;
    global_ships_list[id].country = new_country;
    global_ships_list[id].size = new_size;

    return 1;

}

// Отримати список лікарів у конкретній лікарні
function get_Ships_List () {

    console.log("\n" + `Список усіх кораблів:`);

    for (let id = 0; id < global_ships_list.length; id++) {

        let shipp1 = global_ships_list[id];
        console.log(`\tІм'я корабля: ${shipp1.name}, країна: ${shipp1.country}`);

    }

    console.log();
    
    return global_ships_list;

}

// Експортуємо функції

exports.find_Ship = find_Ship;
exports.add_Ship = add_Ship;
exports.remove_Ship = remove_Ship;
exports.edit_Ship = edit_Ship;
exports.get_Ships_List = get_Ships_List;