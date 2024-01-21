// Значения-типы
const any: any = 1; //Любой
const num :number = 1; //Число
const str: string = 'f' // Строка
const bo: boolean = true // Булеан
const arr: number[] = [1, 2, 3]; // Массив чего угодно

// Типы - обьявление
type TypeExample = {
  name: string
  price: number
}
// Типы - применение
const exampleType: TypeExample = {
  name: 'examle',
  price: 20
}

// Интерфейсы - обьявление
interface IUser {
  name: string
  email: string
}
// Интерфейсы - применение
const user: IUser = {
  name: 'mik',
  email: 'mik@.ru'
}

// Отличие типов от интерфейсов
type TypeExample2 = {
  color: string
} & TypeExample // Расширяем тип при помощи другого типа используя &

interface IuserAge extends IUser {
  age: number
} // Расширяем интерфейс при помощи extends - наследуем от другого интерфейса

const exampleType2: TypeExample2 = {
  name: 'eaxample2',
  price: 200,
  color: 'red'
} // все ОК, расширено

const userPlusAge: IuserAge = {
  name: 'mik',
  email: '123213@yandex.ru',
  age: 7
} // все ОК, расширено

const users: IUser[] = [
  user, {
    name: 'mik',
    email: '21'
  }
]