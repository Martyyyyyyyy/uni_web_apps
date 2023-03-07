// Клас User для прикладу
class User {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  // Масив об'єктів User
  const users = [
    new User('John', 25),
    new User('Bob', 30),
    new User('Alice', 20),
  ];
  
  // Функція порівняння для сортування за полем name
  function compareNames(userA, userB) {
    const nameA = userA.name.toLowerCase();
    const nameB = userB.name.toLowerCase();
    if (nameA < nameB) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    } else {
      return 0;
    }
  }
  
  // Сортування масиву об'єктів User за полем name
  users.sort(compareNames);
  
  // Результат
  console.log(users);
  