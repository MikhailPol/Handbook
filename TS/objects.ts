// Работа с обьектами
// Type
// Создание типа
export type TypeUser = {
  name: string
  age: number
}

type TypeAddres = {
  city: string
  country: string
}

// Создание обьекта на основе типа
const user: TypeUser = {
  age: 25,
  name: 'mik'
}

const addres: TypeAddres = {
  city: 'Moscow',
  country: 'Mtch'
}
// или
let user1: TypeUser
user1 = {
  age: 25,
  name: 'mik'
}
// Обьединение спред-оператором Будет работать, так как ТС сам подхватывает типизацию 2 обьектов
const common = {
  ...user, ...addres
}
// Обьединение типов, что бы передать свойства обьединенных типов в обьект
let common1: TypeUser & TypeAddres;
common1 = {
  ...user, ...addres
}