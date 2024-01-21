const greet = (name: string) => {console.log(`hi, ${name}`)} // Тип параметров функции
const getNumber = (): number => {return 46} // Тип возвращаемого значения функции
const checkValue = (name: string): void => {console.log(`hi, ${name}`)} // Если функция ничего не возвращает.

// Тип возвращаемого значение функции
type TypeFuncReturn = {
  name: string
}

// Обычная функция
function testFync(name: string): TypeFuncReturn{
  return { name }
}

// Стрелочная функция
const testFunc1 = (name: string): TypeFuncReturn => {
  return { name }
}

// Полный тип для типизации параметров функции и возвращаемого значения
type TypeArrowFunc = (name: string) => TypeFuncReturn
const arrFunc: TypeArrowFunc = name => {
  return {name}
}

// Rest оператор
const getNumbers = (...numbers: number[]) => {
  return numbers
}

// Функциональные перегрузки
function getCar(name: string): string // 1-ая сигнатура функции
function getCar(name: string, price: number): string // 2-ая сигнатура функции
function getCar(name: string, price?: number): string {
  return price ? `Название ${name}, цена ${price}` : `Название ${name}`
} // Кончная реализация, в которой есть логика, какая сигнатура будет использоваться в зависимости от арг.

const car1 = getCar('BMW')
const car2 = getCar('BMW', 23)
