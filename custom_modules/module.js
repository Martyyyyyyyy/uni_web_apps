// Підключаємо необхідні файли
const port = require('./port'); 
const ship = require('./ship'); 
const dock = require('./dock'); 

// Доступні операції з портами 
exports.addDock = dock.addDock; 
exports.removeDock = dock.removeDock; 
exports.arriveShip = dock.arriveShip; 
exports.findShipsOnDock = dock.findShipsOnDock; 
exports.get_Docks_List = dock.get_Docks_List;

// Доступні операції з кораблями 
exports.addPort = port.addPort; 
exports.editPort = port.editPort; 
exports.removePort = port.removePort; 
exports.findPort = port.findPort; 
exports.get_Ports_List = port.get_Ports_List; 
 
// Доступні операції з пристанями 
exports.addShip = ship.addShip; 
exports.editShip = ship.editShip; 
exports.removeShip = ship.removeShip; 
exports.findShip = ship.findShip;
exports.get_Ships_List = ship.get_Ships_List;
