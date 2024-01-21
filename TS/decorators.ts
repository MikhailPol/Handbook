/*
Декораторы в TypeScript - это особый тип объявления, который позволяет добавлять дополнительное поведение и метаданные к классам, методам, свойствам и параметрам функций. Они являются основным инструментом для реализации паттернов декоратора в TypeScript.

Декораторы обычно представлены функциями, которые применяются к объявлениям, и выполняются во время выполнения. Они могут изменять или расширять поведение объявления, добавлять дополнительную функциональность или записывать метаданные.
*/

// Декоратор класса
function LogClass(constructor: Function) {
  console.log(constructor.name)
}

@LogClass
class Plane {
  constructor(id: number){ }
}

// Декоратор метода
function LogMethod(target: Object, key: string, descriptor: PropertyDescriptor) {
  console.log(`Method ${key} has been decorated`)
}

class Plane1 {
  private id: number

  constructor(id: number) {
    this.id = id
  }
  @LogMethod
  getId() {
    return this.id
  }
}
// Декоратор свойства
function logProperty(target: any, key: string) {
  console.log(`Property ${key} has been decorated.`);
}

class MyClass {
  @logProperty
  myProperty: string;
  
  constructor(myProperty: string) {
    this.myProperty = myProperty
  }
}
