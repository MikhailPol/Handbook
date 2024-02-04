/*

Объекты. Основные понятия. Создание. Методы. Дескрипторы св-в объекта. prototype ,__proto__;

Объект в JavaScript представляет собой коллекцию свойств, которые могут быть различных типов данных, таких как строки, числа, массивы, функции и другие объекты. В JavaScript объекты являются основным строительным блоком языка и используются для создания структур данных и организации кода.
1) Создание объекта.
  1. Литерал объекта - {}
*/
// const person = {
//   name: 'Mik',
//   age: 23,
//   sayHi: function() {
//     console.log(`hi, my name is ${this.name}, i have ${this.age} years old`);
//   }
// };
// person.sayHi();
/*
  2.Конструктор объекта - new Object()
*/
// const person = new Object();
// person.name = 'Mik';
// person.age = '23';
// person.sayHi = function() {
//   console.log(`hi, my name is ${this.name}, i have ${this.age} years old`);
// };
// person.sayHi();
/*
  3. Функция - конструктор
*/
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.sayHi = function() {
//       console.log(`hi, my name is ${this.name}, i have ${this.age} years old`);
//     };
// }
// const person = new Person('Mik', 23);
// person.sayHi();
/*
  4. Object.create() - можно создать новый объект и установить его прототип на другой объект.
*/
// const personProto = {
//   sayHi: function() {
//     console.log(`hi, my name is ${this.name}, i have ${this.age} years old`);
//   }
// };
// const person = Object.create(personProto);
// person.name = 'Mik';
// person.age = 23;
// person.sayHi();
/*
  5. Классы (ES6) - можно создавать объекты с помощью классов в стандарте ECMAScript 2015 (ES6) и выше.
  Об этом будет отдельная страница.
*/
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   };

//   sayHi() {
//     console.log(`hi, my name is ${this.name}, i have ${this.age} years old`);
//   };
// };
// const person = new Person('Mik', 23);
// person.sayHi();
/*
2) Методы объекта.
  1. Object.keys(obj): возвращает массив с именами собственных перечисляемых свойств объекта obj.
*/
// const person = {
//   name: 'Mik',
//   age: 23
// };
// console.log(Object.keys(person)); //[ 'name', 'age' ]
/*
  2. Object.values(obj): возвращает массив со значениями всех собственных перечисляемых свойств объекта obj.
*/
// const person = {
//   name: 'Mik',
//   age: 23
// };
// console.log(Object.values(person)); //[ 'Mik', 23 ]
/*
  3. Object.entries(obj): возвращает массив, содержащий массивы пар [ключ, значение] для всех собственных перечисляемых свойств объекта obj.
*/
// const person = {
//   name: 'Mik',
//   age: 23
// };
// console.log(Object.entries(person)); //[ [ 'name', 'Mik' ], [ 'age', 23 ] ]
/*
  4. Object.assign(target, ...sources): копирует значения всех перечисляемых свойств исходных объектов sources в целевой объект target и возвращает обновленный целевой объект.
*/
// const person = {}
// const person1 = {name: 'Mik'};
// const person2 = {age: 23};
// Object.assign(person, person1, person2);
// console.log(person.name, person.age); //Mik 23
/*
  5. Object.create(proto, {propertiesObject}): создает новый объект с указанным прототипом proto и дополнительными перечисляемыми свойствами, заданными в объекте propertiesObject.
*/
// const personProto = {
//   sayHi: function() {
//     console.log(`Hi, my name is ${this.name}, i have ${this.age} years old`);
//   }
// };
// const person = Object.create(personProto, {
//   name: {
//     value: 'Mik',
//     enumerable: true
//   },
//   age: {
//     value: 23,
//     enumerable: true
//   }
// });
// person.sayHi();
/*
  6. Object.getOwnPropertyDescriptor(obj, prop) - возвращает дескриптор свойства объекта obj для указанного свойства prop(писать строкой).
*/
// const person = {
//   name: 'mik',
//   age: 23
// }
// console.log(Object.getOwnPropertyDescriptor(person, 'name'));//{ value: 'mik', writable: true, enumerable: true, configurable: true }
/*
  7.Object.getOwnPropertyDescriptors - возвращает объект, содержащий все дескрипторы свойств указанного объекта.
*/
// const person = {
//   name: 'mik',
//   age: 23
// }
// console.log(Object.getOwnPropertyDescriptors(person));
/*{
  name: { value: 23, writable: true, enumerable: true, configurable: true }
  age: { value: 23, writable: true, enumerable: true, configurable: true }
}
*/
/*
  7. Object.defineProperty(obj, prop, descriptor) - задает новое или изменяет существующее свойство prop объекта obj с указанным дескриптором descriptor.
*/
// const person = {
//   name: 'Mik',
//   age: 23
// };
// Object.defineProperty(person, 'age', {
//   value: 20,
//   enumerable: false,
// });
// console.log(Object.getOwnPropertyDescriptor(person, 'age'));//{ value: 20, writable: true, enumerable: false, configurable: true }
/*
  8.Object.defineProperties(obj, descriptors) - позволяет определить или модифицировать несколько свойств объекта одновременно, путем передачи объекта с дескрипторами свойств.
*/
// const person = {
//   name: 'mik',
//   age: 23
// }
// Object.defineProperties(person, {
//   name: {
//     value: 'Mik777'
//   },
//   age: {
//     value: 20
//   }
// });
// console.log(Object.getOwnPropertyDescriptors(person));
/*
{
  age: {value: 20, writable: true, enumerable: true, configurable: true}
  name: {value: 'Mik777', writable: true, enumerable: true, configurable: true}
}
*/
/*
  9. Object.freeze(obj): замораживает объект obj, что означает, что его свойства не могут быть изменены или удалены.
*/
// const person = {
//   name: 'mik',
//   age: 23
// };
// Object.freeze(person);
// person.name = 'miik';
// person.age = 30;
// console.log(person.name, person.age); //mik 23 - без изменений.
// delete person.name;
// console.log(person.name, person.age); //mik 23 - без изменений.
/*
  10. Object.seal(obj): "запечатывает" объект obj, что означает, что его существующие свойства не могут быть удалены, но их значения все еще могут быть изменены.
*/
// const person = {
//   name: 'mik',
//   age: 23
// };
// Object.seal(person)
// delete person.name;
// console.log(person.name); //mik 23 - без изменений.
// person.name = 'miik';
// person.age = 30;
// console.log(person.name, person.age); //miik 30 - заменилось.
/*
  11. Object.isFrozen(obj) - проверяет, является ли объект obj замороженным.
*/
// const person = {};
// Object.freeze(person);
// console.log(Object.isFrozen()); //true
/*
  12. Object.isSealed(obj): проверяет, является ли объект obj запечатанным.
*/
// const person = {};
// Object.seal(person);
// console.log(Object.isSealed(person)); //true
/*
13. Object.fromEntries() - является статическим методом объекта Object в JavaScript, который преобразует список пар ключ-значение в объект.
Он принимает массив, состоящий из подмассивов или итерируемого объекта, в котором каждый элемент является массивом из двух элементов - ключа и соответствующего значения. Затем он создает и возвращает новый объект, в котором каждая пара ключ-значение соответствует элементу массива.
*/
// const personArr = [['name', 'mik'], ['age', 28]];
// const personObj = Object.fromEntries(personArr);
// console.log(personObj.name, personObj.age); //mik 28
/*
  14. Object.getOwnPropertyNames(obj) - является статическим методом объекта Object в JavaScript. Он используется для получения массива всех собственных свойств (не включая унаследованные свойства) из указанного объекта.
*/
// const propertyPerson = {
//   city: 'Moscow'
// }
// const person = Object.create(propertyPerson, {
//   name: {
//     value: 'Mik',
//     enumerable: true
//   },
//   age: {
//     value: 23,
//     enumerable: true
//   },
// });
// console.log(person.city); //Moscow - унаследованное св-во доступно.
// console.log(Object.getOwnPropertyNames(person)); //[ 'name', 'age' ]
/*
  15.getOwnPropertySymbols(obj) - это метод, который используется для получения всех символьных свойств объекта.
*/
// const person = {
//   name: 'mik',
//   [Symbol('key1')]: 'value1',
//   [Symbol('key2')]: 'value2'
// }
// console.log(Object.getOwnPropertySymbols(person)); // [ Symbol(key1), Symbol(key2) ] - name не попадет сюда.
/*
  16. getPrototypeOf - это метод, который используется для получения прототипа объекта. Он возвращает ссылку на объект-прототип, от которого был унаследован указанный объект.
*/
// const personProto = {
//   city: 'Moscow'
// }
// const person = Object.create(personProto, {
//   name: {
//     value: 'Mik',
//   }
// });
// console.log(Object.getPrototypeOf(person) == personProto); //true
/*
  17. Object.setPrototypeOf(obj, prototype)- это статический метод объекта Object, который используется для установки прототипа (свойства `[[Prototype]]`) для указанного объекта.
*/
// const protoPerson = {
//   city: 'Moscow'
// };
// const person = {
//   name: 'Mik',
//   age: 23
// };
// Object.setPrototypeOf(person, protoPerson);
// console.log(person.city, Object.getPrototypeOf(person) == protoPerson); //Moscow true
/*
  18. Object.is(value1, value2) - это метод объекта Object, который используется для сравнения двух значений на равенство. Он возвращает булевое значение true, если значения равны, и false, если значения не равны.
  Метод is() обрабатывает некоторые исключительные случаи, которые могут вызывать неожиданное поведение при использовании других методов сравнения, таких как ===. Например, Object.is(+0, -0) вернет false, в то время как +0 === -0 вернет true.
  Важно отметить, что Object.is() не является заменой для операторов сравнения === и !==. Он предназначен для особых случаев, когда нужно выполнить строгое сравнение на равенство, с учетом всех его особенностей, включая значения NaN и +0/-0.
*/
// console.log(Object.is(1, 1)); //true
// console.log(Object.is(1, '1'));//false
// console.log(-0 === +0);//true
// console.log(Object.is(-0, +0));//*false
// console.log(NaN === NaN);//*false
// console.log(Object.is(NaN, NaN));//*true
/*
  19. Object.preventExtensions(obj) - это метод встроенного объекта Object в JavaScript, который используется для блокировки дальнейшего расширения объекта. После применения этого метода к объекту нельзя будет добавить новые свойства к нему.
*/
// const person = {
//   name: 'mik',
//   age: 23
// };
// Object.preventExtensions(person); // Объект заблокирован для расширения.
// person.city = 'Moscow';
// console.log(person); //{ name: 'mik', age: 23 } - объект не расширился.
/*
  20. Object.isExtensible(obj) используется для проверки, является ли объект расширяемым. Расширяемость объекта определяет, можно ли добавлять новые свойства к объекту. Для изменения расширяемости объекта можно использовать методы Object.preventExtensions(), Object.seal() и Object.freeze().
*/
// const obj1 = {};
// const obj2 = {};
// const obj3 = {};
// const obj4 = {};
// Object.preventExtensions(obj1);
// Object.freeze(obj3);
// Object.seal(obj4);
// console.log(Object.isExtensible(obj1));//false
// console.log(Object.isExtensible(obj2));// true
// console.log(Object.isExtensible(obj3));// false
// console.log(Object.isExtensible(obj4));// false
/*
3.Дескрипторы свойств объекта.
  Дескрипторы свойств объекта - это объекты, которые содержат информацию о свойстве объекта, такую как доступность для записи (writable), возможность перечисления (enumerable), возможность изменения (configurable) и значение свойства (value). Дескрипторы позволяют более детально настраивать поведение свойств объектов.
  Получение дескриптора возможно при помощи Object.getOwnPropertyDescriptor(obj, property) или Object.getOwnPropertyDescriptor(obj)
*/
// const person = {
//   name: 'Mik',
//   age: 23
// }
// console.log(Object.getOwnPropertyDescriptor(person, 'name'));// { value: 'Mik', writable: true, enumerable: true, configurable: true }
// console.log(Object.getOwnPropertyDescriptors(person));
//{
//  age: {value: 23, writable: true, enumerable: true, configurable: true},
//  name: {value: 23, writable: true, enumerable: true, configurable: true}
//}
/*
Значение каждого дескриптора.
  1. value: Определяет значение свойства. Может быть любым типом данных, таким как число, строка, объект или функция. По умолчанию значение равно undefined.
  2. writable: Определяет, может ли быть значение свойства изменено. Если установлено в true, значение может быть изменено, если установлено в false, значение не может быть изменено. По умолчанию false.
  3. enumerable: Определяет, будет ли свойство перечисляемым в цикле for...in и методе Object.keys(). Если установлено в true, свойство будет перечисляемым, если false - не будет. По умолчанию false.
  4. configurable: Определяет, может ли быть изменен дескриптор свойства или удалено свойство из объекта. Если установлено в true, дескриптор и само свойство могут быть изменены и удалены, если false - изменения и удаление запрещены. По умолчанию false.
Для изменения значения дескриптора используются методы Object.defineProperty(obj, prop, description) и 
Object.defineProperties(obj, description).
*/
/*
4)Prototype, __proto__. Прототипное наследование.
Прототипное наследование в JavaScript - это особенность языка, которая позволяет объектам наследовать свойства и методы от других объектов.
В прототипном наследовании каждый объект имеет ссылку на свой прототип (также являющийся объектом), и если доступ к свойству или методу не находится в самом объекте, поиск будет выполняться в его прототипе. Если свойство или метод найдены в прототипе, они будут использованы объектом.

Способы выполнить прототипное наследование.
  1.Каждый объект в JavaScript имеет встроенное свойство с именем "prototype", которое указывает на его прототип. Прототипы могут быть определены для объектов с помощью конструкторов функций с использованием свойства "prototype" этой функции.
*/
// function Person(name) {
//   this.name = name
// }
// Person.prototype.sayHi = function() {
//   console.log(`hi, my name is ${this.name}`);
// };
// const person = new Person('Mik');
// person.sayHi();
/*
  2. При помощи Object.create(prototype) - передав прототип наследуемого объекта.
*/
// const personProto = {
//   city: 'Moscow'
// }
// const person = Object.create(personProto, {
//   name: {
//     value: 'Mik'
//   }
// });
// console.log(person.city); //Moscow
// console.log(Object.getPrototypeOf(person) === personProto); //true
/*
  3. при помощи метода Object.setPrototypeOf(obj, prototype).
*/
// const personProto = {
//     city: 'Moscow'
//   }
// const person = {
//   name: 'mik'
// }
// Object.setPrototypeOf(person, personProto);
// console.log(person.city); //Moscow
// console.log(Object.getPrototypeOf(person) === personProto); //true
/*
  4. При помощи свойства __proto__
*/
// const personProto = {
//   name: 'Mik',
//   age: 23
// };
// const person = {
//   __proto__: personProto
// };
// console.log(person.name, person.age);
// console.log(Object.getPrototypeOf(person) === personProto); //true