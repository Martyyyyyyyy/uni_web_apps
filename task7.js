const mod = require('custom_modules');
const { dock, undock, getShips } = require('./custom_modules/Port');

// Додавання корабля
let ship1 = mod.add_Ship('Titanic', 'United Kingdom', 882);
console.log('Доданий корабель:', ship1);
let ship2 = mod.add_Ship('Flora', 'England', 645);
console.log('Доданий корабель:', ship2);
let ship3 = mod.add_Ship('Drakar', 'Ireland', 397);
console.log('Доданий корабель:', ship3);

// Список всіх кораблів
mod.get_Ships_List();

// Змінення корабля
console.log('Заміна корабля Titanic: ', mod.edit_Ship('Titanic', 'United Kingdom', 882, 'Olympic', 'United Kingdom', 730));
console.log(`Нові ім'я, країна та розмір після зміни: ${ship1.name}, ${ship1.country}, ${ship1.size}`);

// Список всіх кораблів
mod.get_Ships_List();

// Вилучення корабля
let ship4 = mod.remove_Ship('Drakar', 'Ireland', 397);
console.log('Вилучення корабеля Drakar:', ship4);

// Список всіх кораблів
mod.get_Ships_List();

// Знаходження корабля
let ship_1 = mod.find_Ship('Flora', 'England', 645);
console.log('Знаходження корабля Flora:', ship_1);

// Отримання списку кораблів
let allShips = mod.get_Ships_List();
console.log('Всі кораблі:', allShips);

/*==============================================*/

// Додавання кількох нових портів в колекцію 
let port11 = mod.add_Port('Порт A', 'Країна A');
let port22 = mod.add_Port('Порт B', 'Країна B');
let port33 = mod.add_Port('Порт C', 'Країна C');

// Список всіх портів
mod.get_Ports_List();

// Змінення ім'я і країну port2
console.log('Заміна порта В: ', mod.edit_Port('Порт B', 'Країна B', "Порт L", 'Країна L'));
console.log(`Нові ім'я та країна після зміни: ${port22.name}, ${port22.country}`);

// Список всіх портів
mod.get_Ports_List();

// Знаходження порта за іменем
let port_1 = mod.find_Port('Порт A', 'Країна A');
console.log(`Знаходження порта А: ${port_1.name}, ${port_1.country}`);

// Вилучення port3 із списку портів
console.log('Вилучення порта С:', mod.remove_Port('Порт C', 'Країна C'));

// Список всіх портів 
mod.get_Ports_List();

/*==============================================*/

// Створення нової пристані і добавляння її до загального списку
let dock1 = mod.add_Dock('Пристань 1', 'Порт A',);
let dock2 = mod.add_Dock("Пристань 2", "Порт A");

// Список всіх пристаней
mod.get_Docks_List();

// Створення нового корабля який прибуй на пристань dock1
let ship_arrive1 = mod.arrive_Ship('Корабель 1', 'Пристань 1');
let ship_arrive2 = mod.arrive_Ship('Корабель 2', 'Пристань 1');

console.log(ship_arrive1, ship_arrive2);

// Створення іншої пристані і добавляння її до загального списку
let dock3 = mod.add_Dock('Пристань 3', 'Порт A');

// Список всіх пристаней
mod.get_Docks_List();

// Вилучення dock1 із загального списку
mod.remove_Dock(dock3);

// Отримання списку всіх пристаней і записування їхніх імен і порта, до якого вони належать
let docksList = mod.get_Docks_List();
docksList.forEach(dock => {
  console.log(`Ім'я пристані: ${dock.name}, порт в пристані: ${dock.port}`);
});