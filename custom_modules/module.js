// Підключаємо необхідні файли
const port = require('./port'); 
const ship = require('./ship'); 
const dock = require('./dock'); 

// Доступні операції з пристанями 
exports.add_Dock = dock.add_Dock; 
exports.remove_Dock = dock.remove_Dock; 
exports.arrive_Ship = dock.arrive_Ship;
exports.leave_Ship = dock.leave_Ship;
exports.find_Ships_On_Dock = dock.find_Ships_On_Dock;
exports.find_Dock = dock.find_Dock; 
exports.get_Docks_List = dock.get_Docks_List;

// Доступні операції з портами
exports.add_Port = port.add_Port; 
exports.edit_Port = port.edit_Port; 
exports.remove_Port = port.remove_Port; 
exports.find_Port = port.find_Port; 
exports.get_Ports_List = port.get_Ports_List; 
 
// Доступні операції з кораблями
exports.add_Ship = ship.add_Ship; 
exports.edit_Ship = ship.edit_Ship; 
exports.remove_Ship = ship.remove_Ship; 
exports.find_Ship = ship.find_Ship;
exports.get_Ships_List = ship.get_Ships_List;
