function shuffleArray(array) {
    // Проходимо по всім елементам масиву
    for (let i = array.length - 1; i > 0; i--) {
      // Генеруємо випадковий індекс для обміну з поточним індексом
      const j = Math.floor(Math.random() * (i + 1));
      // Обмінюємо поточний елемент з випадковим
      [array[i], array[j]] = [array[j], array[i]];
    }
    // Повертаємо перемішаний масив
    return array;
  }
const arr = [1, 2, 3, 4, 5];
console.log(shuffleArray(arr)); // виведе перемішаний масив