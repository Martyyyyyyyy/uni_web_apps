function sortAlpha(word) { 
    return word.split('').sort().join(''); 
  } 
   
  // Приклад функції: 
  console.log(sortAlpha('martin')); // aimnrt
  console.log(sortAlpha('Martin')); // Mainrt (враховується стандарт unicode)
    