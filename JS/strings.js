// string - строка
let exampleStr = 'abc';
// Свойства
exampleStr.length // возвращает длину строки
exampleStr.constructor // возвращает ссылку на функцию-конструктор объекта String.
String.prototype.customMethod = function() {
  return "Custom method called!";
}; // prototype - позволяет добавлять методы и свойства к объектам String.
console.log(exampleStr.customMethod())

// Методы
exampleStr.charAt(1) // возвращает символ в указанном индексе строки.
exampleStr.charCodeAt(1) // возвращает числовое значение Юникода для символа в указанном индексе строки.
exampleStr.concat(exampleStr, 'concat') // объединяет строки и возвращает новую строку.
exampleStr.indexOf('c', 1) // возвращает индекс первого вхождения подстроки substring в строку, начиная с позиции position. Если подстрока не найдена, возвращает -1.
exampleStr.lastIndexOf('c', 1) // возвращает индекс последнего вхождения подстроки substring в строку, до позиции position. Если подстрока не найдена, возвращает -1.
exampleStr.slice(0, 1) // возвращает часть строки, начиная с индекса start до индекса end, не включая end. Если end не указано, возвращает строку до конца.
exampleStr.substring(1, 0) // возвращает часть строки, начиная с индекса start до индекса end, не включая end. Если end меньше start, параметры start и end меняются местами. Если один из параметров отрицательный, он будет рассматриваться как 0.
exampleStr.trim() // удаляет пробелы с начала и конца строки.
exampleStr.toLowerCase() // возвращает новую строку, в которой все символы преобразованы в нижний регистр.
exampleStr.toUpperCase() // возвращает новую строку, в которой все символы преобразованы в верхний регистр.
exampleStr.replace('a', 'c') // заменяет первое вхождение searchValue в строку на replaceValue.
exampleStr.split('a', 1) // разделяет строку на массив подстрок, используя разделитель separator. Если limit указан, то разделение произойдет только на указанное количество подстрок.
exampleStr.startsWith('a', 0) // возвращает true, если строка начинается с searchString, и false в противном случае. Можно указать позицию, с которой начинать поиск.
exampleStr.endsWith('c', 2) // возвращает true, если строка заканчивается на searchString, и false в противном случае. Можно указать позицию, на которой заканчивать поиск.
exampleStr.includes('ab', 0) // возвращает true, если подстрока searchString найдена в строке, иначе false.
exampleStr.padStart(10, '*') // добавляет символы padString в начало строки до достижения длины targetLength.
exampleStr.padEnd(10, '*') // добавляет символы padString в конец строки до достижения длины targetLength.
exampleStr.repeat(10) // возвращает новую строку, содержащую повторяющуюся count раз исходную строку.
