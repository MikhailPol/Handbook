/*
Расширенные типы в TypeScript позволяют создавать более сложные и выразительные типы данных, которые могут быть использованы для более точного описания структуры и поведения объектов в вашей программе.
*/

//Union type - обьединение
let myVariable: string | number;
myVariable = 'asd' // ok
myVariable = 12//ok
// myVariable = true - error

// Пересечение

type TypePerson = {
  name: string
  age: number
}
type TypeEmployee = {
  company: string
  position: string
}
type TypeEmployeePerson = TypePerson & TypeEmployee
const employer: TypeEmployeePerson = {
  name: 'asd',
  age: 12,
  company: '123',
  position: 'fas'
} // OK

// Условные типы
type Check<T> = T extends string ? string : number;
let a: Check<string>;    // a будет иметь тип string
let b: Check<number>;    // b будет иметь тип number
type Type1 = Check<number>
type Type2 = Check<string>

type TypeBrand = 'BMW'|'mclaren'|'mercedes'
type TypePrice = 100_000|1_000_000|500_000
type TypeCar = `${TypeBrand} ${TypePrice}`
const car3: TypeCar = 'BMW 1000000';