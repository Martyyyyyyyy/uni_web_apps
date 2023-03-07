function nsd(a, b) {
    // якщо одне з чисел рівне 0, то повертаємо інше число
    if (a === 0) return b;
    if (b === 0) return a;
  
    // використовуємо алгоритм Евкліда для знаходження НСД
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
  
    return a;
  }
console.log(nsd(12, 18)); // виведе 6
console.log(nsd(24, 60)); // виведе 12
console.log(nsd(17, 23)); // виведе 1