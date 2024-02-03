/*
Массивы. Основные понятия. Создание. Методы массивов.

1) Для хранения упорядоченных коллекций существует особая структура данных, которая называется массив, Array.
Но по факту для js это object.
Создание:
*/
// let arr = new Array();
// let arr1 = [];
// let arr2 = [1, 2, 'abc'];

// console.log(arr, arr1, arr2); //[] [] [ 1, 2, 'abc' ]
// console.log(arr instanceof Array, Array.isArray(arr1), typeof(arr2)); //true true object
// *** для typeof array является object ***
/*
2)Методы массива:
  1. push() - добавляет один или несколько элементов в конец массива и возвращает новую длину массива.
*/
// const arr = [1, 2, 3];
// console.log(arr.push(4)); // 4 - длина массива
// console.log(arr.push(5, 6)); // 6 - длина массива
// console.log(arr) // [ 1, 2, 3, 4, 5, 6 ].
/*
  2. pop() - удаляет последний элемент массива и возвращает его значение.
*/
// const arr = [1, 2, 3, 4];
// console.log(arr.pop()); //4
// console.log(arr.pop()); //3
// console.log(arr); //[ 1, 2 ]
/*
  3. shift() - удаляет первый элемент массива и сдвигает все остальные элементы на одну позицию влево. Возвращает удаленное значение.
*/
// const arr = [1, 2, 3, 4];
// console.log(arr.shift()); //1
// console.log(arr.shift()); //2
// console.log(arr);//[ 3, 4 ]
/*
  4. unshift() - добавляет один или несколько элементов в начало массива, сдвигая остальные элементы вправо, и возвращает новую длину массива.
*/
// const arr = [3, 4, 5];
// console.log(arr.unshift(2)); //4
// console.log(arr.unshift(0, 1));//6
// console.log(arr);//[ 0, 1, 2, 3, 4, 5 ]
/*
*** push() и pop() работают быстрее чем shift() и unshift(), потому что первые 2 просто добавляют или удаляют элемент с конца, и уменьшают длину, а вторые работают с началом массива, смещая индекс элементов, по этому производится переиндексация всех элементов массива. ***
  5. concat() - объединяет два или более массива и возвращает новый массив. Возможно добавление простых значений
*/
// const arr = [1, 2];
// const arr1 = [3, 4];
// const arr2 = [5, 6];
// console.log(arr.concat(arr1)); //[ 1, 2, 3, 4 ]
// console.log(arr.concat(arr1, arr2)); //[ 1, 2, 3, 4, 5, 6 ]
// console.log(arr.concat(arr1, arr2, 7, 8)); //[1, 2, 3, 4, 5, 6, 7, 8]
// console.log(arr); //[ 1, 2 ] - сам массив не изменен.
/*
  6. slice() - возвращает новый массив, содержащий копию части исходного массива.
  slice(start, ?end) - индекс от и до. end - не обязательный.
  С его помощью можно создать отдельную копию массива.
*/
// const arr = [1, 2, 3, 4, 5];
// const arr1 = arr.slice();
// console.log(arr1); //[ 1, 2, 3, 4, 5 ]
// console.log(arr.slice(2)); //[ 3, 4, 5 ]
// console.log(arr.slice(0, 3)); //[ 1, 2, 3 ]
// console.log(arr); // [ 1, 2, 3, 4, 5 ]
/*
  7. splice() - изменяет содержимое массива, удаляя, заменяя или добавляя элементы.
  Возвращает массив из удалённых элементов.
  splice(start, delete counter, elem1, elem2, elem n) - начиная с позиции start удалит delete counter елементов
  и вставит на их место elem. Если не нужно удалять элементы, а только вставить - delete counter в 0.
*/
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.splice(0, 4, 9, 8, 7, 6)); //[ 1, 2, 3, 4 ] - массив удаленных
// console.log(arr); // [ 9, 8, 7, 6, 5 ] - измененный массив.
// const arr1 = [1, 2, 3, 4, 5]
// console.log(arr1.splice(0, 1)) // [ 1 ] убрал 1 элемент с индекса 0
// console.log(arr1) //[ 2, 3, 4, 5 ]
// console.log(arr1.splice(-1, 0, 6, 7, 8)); // [] - ничего не было удалено.
// console.log(arr1); //[2, 3, 4, 6, 7, 8, 5] добавлены элементы после последнего индекса.
/*
  8. indexOf() - возвращает индекс первого вхождения указанного элемента в массиве. Если элемент не найден, возвращает -1.
  indexOf(item, ?from) - ищет item с индекса from(необяз.)
*/
// const arr = [1, 2, 3, 4, 5, 1];
// console.log(arr.indexOf(1)); // 0;
// console.log(arr.indexOf(1, 1)); // 5;
// console.log(arr.indexOf(6)); // -1;
/*
  9. lastIndexOf() - возвращает индекс последнего вхождения указанного элемента в массиве. Если элемент не найден, возвращает -1.
  lastIndexOf(item, ?from) - ищет item с индекса from(необяз.)
*/
// const arr = [1, 2, 3, 4, 5, 1];
// console.log(arr.lastIndexOf(1)); // 5
// console.log(arr.lastIndexOf(1, 4)); // 0
// console.log(arr.lastIndexOf(6)); // -1
/*
  10. includes() - используется для определения, содержит ли массив определенное значение. Он возвращает логическое значение true, если значение найдено в массиве, и false, если значение не найдено.
  includes(searchElement, ?fromIndex)
*/
// const arr = [1, 2, 3, 4 ,5];
// console.log(arr.includes(4)); //true
// console.log(arr.includes(4, 4)); //false
/*
  11. find() - возвращает первый элемент в массиве, который удовлетворяет указанному условию, или undefined, если такой элемент не найден.
  find((callback(elem, ?index, ?currentArray) => something code))

*/
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.find((element, index, arr) => element > 3 && index > 3)); //5 ;
// console.log(arr.find((element, index, arr) => element > 6 && index > 3)); //undefined ;
/*
  12. findIndex() - работает аналогично методу find(), но возвращает индекс первого найденного элемента, удовлетворяющего условию, или -1, если такой элемент не найден.
  findIndex((callback(elem, ?index, ?currentArray) => something code))
*/
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.findIndex((elem, index, arr) => elem > 3 && index > 3)); //4
// console.log(arr.findIndex((elem, index, arr) => elem > 6 && index > 3)); //-1
/*
  13. findLastIndex() - аналогичен методу findIndex(), но возвращает индекс последнего найденного элемента, удовлетворяющего условию.
  findLastIndex((callback(elem, ?index, ?currentArray) => something code))
*/
// const arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.findLastIndex((elem, index, arr) => elem > 3 && index > 3)); //5
// console.log(arr.findLastIndex((elem, index, arr) => elem > 6 && index > 3)); //-1
/*
  14.  join() - объединяет все элементы массива в одну строку, разделенную указанным разделителем.
  join(?separator)
*/
// const arr = ['h', 'i'];
// console.log(arr.join()); //h,i
// console.log(arr.join('')); //hi
// console.log(arr.join('#')); //h#i
/*
  15. reverse() - меняет порядок элементов массива на обратный.
*/
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.reverse()) //[ 5, 4, 3, 2, 1 ]
/*
  16. sort() - используется для сортировки элементов массива в порядке возрастания. Он изменяет исходный массив, переупорядочивая его элементы. По умолчанию, sort() сортирует элементы массива в лексикографическом порядке, то есть сравнивает элементы как строки. Например, числа будут сравниваться в виде строк, а не в числовом порядке.
  sort(compareFunc(a, b) => something code) - можно задать условие сортировки (необязат.)
*/
// const arr = [2, 5, 6, 1, 3, 4];
// console.log(arr.sort()) // [ 1, 2, 3, 4, 5, 6 ]
// console.log(arr.sort((a, b) => b - a)) // [ 6, 5, 4, 3, 2, 1 ]
/*
  17. map() - создает новый массив, содержащий результат вызова указанной функции для каждого элемента исходного массива.
  map(callback(elem, index, current arr) => something code)
*/
// const arr = [1, 2, 3, 4, 5];
// const arrSquare = arr.map((elem) => elem ** 2); //Возводим каждый элемент массива в квадрат
// const arrSquareRevers = arr.map((elem) => elem ** 2); //Возводим каждый элемент массива в квадрат
// console.log(arr); //[ 1, 2, 3, 4, 5 ]
// console.log(arrSquare); //[ 1, 4, 9, 16, 25 ]
/*
  18. filter() - создает новый массив, содержащий все элементы исходного массива, для которых указанная функция возвращает true.
  filter(callback(elem, index, current arr) => something code)
*/
// const arr = [1, 2, 3, 4, 5];
// const filterArr = arr.filter((elem) => elem > 1 && elem < 5);
// console.log(filterArr); //[ 2, 3, 4 ]
// console.log(arr); //[ 1, 2, 3, 4, 5 ]
/*
  19. reduce() - применяет указанную функцию к аккумулятору и каждому элементу массива (слева направо), возвращая одно значение.
  reduce(callback(value, index, arr) => accumulator ...something code, ?initialValue)
  *** В примере ниже, функция будет накапливать в accumulator квадраты чисел массива, и вернет накопленное значение. По умолчанию значение accumulator равно 0. Во втором примере начальное значение установлено в -5
  ***
*/
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.reduce((accumulator, currentValue) => accumulator + currentValue ** 2)); //55
// console.log(arr.reduce((accumulator, currentValue) => accumulator + currentValue ** 2, -5)); //50
/*
  20. reduceRight() - работает аналогично методу reduce(), но итерация по элементам массива происходит справа налево (от последнего к первому элементу).
  reduceRight(callback(value, index, arr) => accumulator ...something code, ?initialValue)
*/
// const arr = ['i', 'H'];
// console.log(arr.reduceRight((accumulator, currentValue) => accumulator + currentValue)); //Hi
/*
  21. forEach() - выполняет указанную функцию один раз для каждого элемента массива.
  forEach((elem, index, arr) => somethig code...)
*/
// const arr = [1, 2, 3, 4, 5];
// arr.forEach((elem, index, arr) => console.log(`Elem: ${elem}, index: ${index}, arr: ${arr}`));
// console.log(arr);
/*
Elem: 1, index: 0, arr: 1,2,3,4,5
Elem: 2, index: 1, arr: 1,2,3,4,5
Elem: 3, index: 2, arr: 1,2,3,4,5
Elem: 4, index: 3, arr: 1,2,3,4,5
Elem: 5, index: 4, arr: 1,2,3,4,5
[ 1, 2, 3, 4, 5 ]
*/
/*
  22. copyWithin - копирует часть массива в другую часть этого же массива внутри его пределов, без изменения его длины.
  copyWithing(target, ?start, ?end) - target - индекс, куда будет скопированна часть массива. start - индес, с которого начнется копирование, end - индекс, по который будет произведено копирование
*/
// const arr = [1, 2, 3, 4, 5];
// arr.copyWithin(0, 2, 4);
// console.log(arr); //[ 3, 4, 3, 4, 5 ].
/*
  23. fill() - изменяет все элементы массива на указанное значения начиная с начального индекса и заканчивая конечным индексом (исключая его). Он изменяет сам массив и возвращает измененный массив.
  fill(value, ?start, ?end)
*/
// const arr = [1, 2, 3, 4, 5];
// arr.fill(0, 1, 4);
// console.log(arr); //[ 1, 0, 0, 0, 5 ]
// arr.fill(0);
// console.log(arr); //[ 0, 0, 0, 0, 0 ]
/*
  24. flat() - используется для "разглаживания" (flattening) многомерного массива, преобразуя его в одномерный массив. Это значит, что все вложенные массивы будут объединены в один общий массив.
  flat(?depth) - depth, глубина разглаживания (по умолчанию 1), указывает, насколько глубокую вложенность нужно разгладить
*/
// const arr = [1, [2, 3], [4, 5, [6, 7]]];
// console.log(arr.flat()); //[ 1, 2, 3, 4, 5, [ 6, 7 ] ] - 1 уровень вложенности
// console.log(arr.flat(2)); //[ 1, 2, 3, 4, 5, 6, 7] - 2 уровень вложенности
// console.log(arr);//[ 1, [ 2, 3 ], [ 4, 5 ] ]
/*
  25. flatMap() - комбинирует две операции: map() и flat(). Он применяет функцию обратного вызова к каждому элементу массива, а затем "разглаживает" результаты в одномерный массив. Это позволяет нам применять функцию к массиву и возвращать новый массив с результатами преобразования и автоматически "разглаживать" его.
*/
// const arr = [[1], [2, 3], [4, 5]]; //
// console.log(arr.flatMap((elem) => elem));// [ 1, 2, 3, 4, 5 ]
// console.log(arr.flatMap((elem) => elem.map((num) => num ** 2))); //[ 1, 4, 9, 16, 25 ]
// console.log(arr); //[ [ 1 ], [ 2, 3 ], [ 4, 5 ] ]
/*
  26. Array.from() - используется для создания нового массива из итерируемого или массивоподобного объекта.
  Array.from(iterable, ?function);
*/
// const greet = 'Hi';
// console.log(Array.from(greet)); //[ 'H', 'i' ]
// const set = new Set([1, 2, 3]);
// console.log(Array.from(set, (num) => num ** 2)); //[ 1, 4, 9 ]
/*
  27. keys() - возвращает новый объект итератора, который содержит индексы элементов в массиве.
*/
// const arr = [1, 2, 3];
// const iterator = arr.keys();
// console.log(iterator.next()); //{ value: 0, done: false }
// console.log(iterator.next()); //{ value: 1, done: false }
// console.log(iterator.next()); //{ value: 2, done: false }
// console.log(iterator.next()); //{ value: undefined, done: true }
/*
  28. values() - возвращает новый объект итератора, который содержит значения элементов в массиве.
*/
// const arr = [1, 2, 3];
// const iterator = arr.values();
// console.log(iterator.next()); //{ value: 1, done: false }
// console.log(iterator.next()); //{ value: 2, done: false }
// console.log(iterator.next()); //{ value: 3, done: false }
// console.log(iterator.next()); //{ value: undefined, done: true }
/*
  29. entries - возвращает новый объект итератора (`Iterator`), который содержит пары ключ-значение для каждого элемента массива.
*/
// const arr = [1, 2, 3];
// const iterator = arr.entries();
// console.log(iterator.next()); //{ value: [ 0, 1 ], done: false }
// console.log(iterator.next()); //{ value: [ 1, 2 ], done: false }
// console.log(iterator.next()); //{ value: [ 2, 3 ], done: false }
// console.log(iterator.next()); //{ value: undefined, done: true }
/*
  30. every() - используется для проверки, удовлетворяют ли все элементы массива определенному условию. Он возвращает булево значение true, если все элементы массива соответствуют условию, или false, если хотя бы один элемент не соответствует условию.
*/
// const arr = [1, 2, 3, 4];
// console.log(arr.every((elem, index) => elem < 5 && index < 5)); // true
// console.log(arr.every((elem, index) => elem < 3 && index < 5)); // false
/*
  31. some() - используется для проверки, удовлетворяет ли хотя бы один элемент массива определенному условию. Он возвращает булево значение true, если хотя бы один элемент массива соответствует условию, или false, если ни один элемент не соответствует условию.
*/
// const arr = [1, 2, 3, 4];
// console.log(arr.some((elem) => elem > 3)); //true
// console.log(arr.some((elem) => elem > 4)); //false
/*
  32. toString() - преобразует элементы массива в строки и объединяет их в единую строку, разделенную запятыми
*/
// const arr = [1, 2, 3, 'a', 'b', 'c'];
// console.log(arr.toString()); //'1,2,3,a,b,c'
/*
  33. toLocaleString() - используется для преобразования элементов массива в строки, используя локальные настройки языка и региона.
  ***toLocaleString(?local, ?options) - необязательные аргументы. local - строка, определяющая язык и регион для форматирования. Например, "en-US" для английского языка США или "ru-RU" для русского языка России. Если не указан, будет использована локаль по умолчанию.
  options - объект, содержащий дополнительные параметры форматирования, такие как style (стиль числового формата). Это отдельная тема, поищите в интеренете кому интересно.
  ***
*/
// const arr = [1, 2, 3, 'a', 'b', 'c'];
// console.log(arr.toLocaleString('en-US')); //1,2,3,a,b,c
/*
  34. Symbol.iterator - используется для создания итератора, который позволяет перебирать элементы массива по одному.
*/
// const arr = [1, 2, 3, 4];
// const iterator = arr[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());