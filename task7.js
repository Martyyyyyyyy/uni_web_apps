const mod = require('custom_modules');

// Додавання корабля
let ship1 = mod.addShip('Titanic', 'United Kingdom', 882);
console.log('Доданий корабель:', ship1);
let ship2 = mod.addShip('Flora', 'England', 645);
console.log('Доданий корабель:', ship2);
let ship3 = mod.addShip('Drakar', 'Ireland', 397);
console.log('Доданий корабель:', ship3);

// Список всіх кораблів
mod.get_Ships_List();

// Змінення корабля
console.log('Заміна корабля Titanic: ', mod.editShip(ship1, 'Olympic', 'United Kingdom', 730));
console.log(`Нові ім'я, країна та розмір після зміни: ${ship1.name}, ${ship1.country}, ${ship1.size}`);

// Список всіх кораблів
mod.get_Ships_List();

// Вилучення корабля
mod.removeShip(ship3);
console.log('Вилучення корабеля Drakar:', ship3);

// Список всіх кораблів
mod.get_Ships_List();

// Знаходження корабля
let ship_1 = mod.findShip('Flora');
console.log('Знаходження корабля Flora:', ship_1);

// Отримання списку кораблів
let allShips = mod.get_Ships_List();
console.log('Всі кораблі:', allShips);

/*==============================================*/

// Додавання кількох нових портів в колекцію 
let port1 = mod.addPort('Порт A', 'Країна A');
let port2 = mod.addPort('Порт B', 'Країна B');
let port3 = mod.addPort('Порт C', 'Країна C');

// Список всіх портів
mod.get_Ports_List();

// Змінення ім'я і країну port2
console.log('Заміна порта В: ', mod.editPort(port2, "Порт L", 'Країна L'));
console.log(`Нові ім'я та країна після зміни: ${port2.name}, ${port2.country}`);

// Список всіх портів
mod.get_Ports_List();

// Знаходження порта за іменем
let port_1 = mod.findPort('Порт A');
console.log(`Знаходження порта А: ${port_1.name}, ${port_1.country}`);

// Вилучення port3 із списку портів
console.log('Вилучення порта С:', mod.removePort(port3));

// Список всіх портів 
mod.get_Ports_List();

/*==============================================*/

// Створення нової пристані і добавляння її до загального списку
let dock1 = mod.addDock('Пристань 1', 'Порт A',);
let dock2 = mod.addDock("Пристань 2", "Порт A");

// Список всіх пристаней
mod.get_Docks_List();

// Створення кількох кораблів
let ship_2 = { name: "Корабель 1" };
let ship_3 = { name: "Корабель 2" };

// Створення нового корабля який прибуй на пристань dock1
mod.arriveShip(ship_2, dock1);
mod.arriveShip(ship_3, dock1);

// Список всіх пристаней
mod.get_Docks_List();

// Знаходження всіх кораблів на dock1 і записування їхніх імен
let shipsOnDock1 = mod.findShipsOnDock(dock1);
console.log(`Кораблі на ${dock1.name}: ${shipsOnDock1.map(ship => ship.name).join(', ')}`);

// Створення іншої пристані і добавляння її до загального списку
let dock3 = mod.addDock('Пристань 3', 'Порт A');

// Список всіх пристаней
mod.get_Docks_List();

// Вилучення dock1 із загального списку
mod.removeDock(dock1);

// Отримання списку всіх пристаней і записування їхніх імен і порта, до якого вони належать
let docksList = mod.get_Docks_List();
docksList.forEach(dock => {
  console.log(`Ім'я пристані: ${dock.name}, порт в пристані: ${dock.port}`);
});