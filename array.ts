// Работа с массивами
// Массив строк
let array: string[]
array = ['1', '2']
// или
const array1: string[] = ['1', '2']
// или
const array2: Array<String> = ['1', '2']

//Неизменяемый массив
const numbers: ReadonlyArray<number> = [0, 1, 2]
// numbers[0] = 1 - Error так как readonly не даст изменить массив после создания

// Кортежи. Указывается колличество и тип аргуменнтов.
type TypeArray = [number, string, null]
const array3: TypeArray = [1, '2', null]