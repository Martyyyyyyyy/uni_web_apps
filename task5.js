function getDaysInMonth(month, year) {
    // Використовуємо вбудований об'єкт Date для створення дати з першим числом заданого місяця
    const date = new Date(year, month - 1, 1);
    // Встановлюємо дату на останнє число місяця
    date.setMonth(date.getMonth() + 1);
    date.setDate(date.getDate() - 1);
    // Повертаємо день останнього числа місяця
    return date.getDate();
  }
console.log(getDaysInMonth(2, 2023)); // виведе 28