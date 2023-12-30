function arabicToRoman(a) {
    const rom = { "C": 100, "XC": 90, "LX": 50, "XL": 40, "X": 10, "IX": 9, "V": 5, "IV": 4, "I": 1 };
    let result = "";
    for (let key in rom) {
      while (a >= rom[key]) {
        result += key;
        a -= rom[key];
      }
    }
    return result;
  }
  
  
  
  function calculate(operation, num1, num2) {
    // Проверка наличия аргументов
    if (!operation || !num1 || !num2) { // Проверка наличия аргументов
      return "Необходимо указать арифметическую операцию и два числа";
    }
  
    // Проверка типов аргументов
    if (typeof operation !== "string" || typeof num1 !== "string" || typeof num2 !== "string") {
      return "Аргументы должны быть строками";
    }
  
    // Проверка валидности арифметической операции
    if (!["+", "-", "*", "/"].includes(operation)) {
      return "Недопустимая арифметическая операция";
    }
  
    // Проверка валидности чисел
    if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) {
      return "Аргументы должны быть числами";
    }
  
    // Проверка деления на ноль
    if (operation === "/" && parseFloat(num2) === 0) {
      return "Деление на ноль невозможно";
    }
  
    // Выполнение операции и возврат результата
    let result;
    if (operation === "+") {
      result = parseFloat(num1) + parseFloat(num2);
    } else if (operation === "-") {
      result = parseFloat(num1) - parseFloat(num2);
    } else if (operation === "*") {
      result = parseFloat(num1) * parseFloat(num2);
    } else if (operation === "/") {
      result = parseFloat(num1) / parseFloat(num2);
    }
  
    return Math.floor(result).toString();
  }
  
  function calculator(string) {
    let arr = string.toLowerCase().split(' ');
    if (arr.length !== 3) {
      return 'Invalid input';
    }
    let a = arr[0];
    let b = arr[2];
    let znak = arr[1];
    const ok = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x'];
    if (!ok.includes(a) || !ok.includes(b)) {
      return 'Invalid input 2';
    }
    const rimrim = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x'];
    if (rimrim.includes(a) && rimrim.includes(b)) {
      const Rim = { 'i': 1, 'ii': 2, 'iii': 3, 'iv': 4, 'v': 5, 'vi': 6, 'vii': 7, 'viii': 8, 'ix': 9, 'x': 10 };
      a = Rim[a].toString();
      b = Rim[b].toString();
      let result1 = calculate(znak, a, b);
      result1 = arabicToRoman(result1);
      return result1
    }
  
  
    let result = calculate(znak, a, b);
    return result
  }
  
  module.exports = calculator; // Не трогайте эту строчку

  console.log(calculator('I + V'));