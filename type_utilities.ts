/*
Утилиты типов в TypeScript - это предопределенные наборы типов, которые предоставляют некоторую функциональность при работе с типами данных.

1. Partial<T>: Эта утилита принимает тип T и создает новый тип, в котором все свойства T делаются необязательными. Это полезно, когда вы хотите создать новый объект на основе существующего, но не хотите указывать все свойства.
*/
interface IClient {
  name: string
  age: number
  email: string
}
// Тип на основе интерфейса
type TPartialClient = Partial<IClient>
// Интерфейс на основе интерфейса
interface IClientPartial extends Partial<IClient>{ }

const partialClient: TPartialClient = {
  name: 'example'
} // Все поля из интерфейса Iuser стали необязателны
const partialClient1: IClientPartial = {
  age: 22
} // Все поля из интерфейса Iuser стали необязателны
/*
2. Required<T>: Эта утилита принимает тип T и создает новый тип, в котором все свойства T делаются обязательными. Это полезно, когда вы хотите указать, что все свойства должны быть присутствующими.
*/
interface Iclient1 {
  name?: string
  age?: number
}

// Тип на основе типа
type TRequiredClient = Required<Iclient1>
// Интерфейс на основе интерфейса
interface IRequiredClient extends Required<Iclient1>{ }

const requiredClient: TRequiredClient = {
  name: 'asd',
  age: 22
}// Все поля стали обязательными
const requiredClient1: IRequiredClient = {
  name: 'asd',
  age: 22
}// Все поля стали обязательными
/*
3. Readonly<T>: Эта утилита принимает тип T и создает новый тип, в котором все свойства T делаются только для чтения. Это означает, что свойства не могут быть изменены после инициализации.
*/
interface Iclient2 {
  name: string
  age: number
}
// Тип на основе типа
type TReadOnlyClient = Readonly<Iclient2>
// Интерфейс на основе интерфейса
interface IReadOnlyClient extends Readonly<Iclient2> { }

const readOnlyClient: TReadOnlyClient = {
  name: 'asd',
  age: 22
} // readOnlyClient.name = 'dfg' - ошибка, так как только для чтения
const readOnlyClient1: IReadOnlyClient = {
  name: 'asd',
  age: 22
} // readOnlyClient1.name = 'dfg' - ошибка, так как только для чтения

/* 
4. Pick<T, K>: Эта утилита принимает тип T и список свойств K и создает новый тип, состоящий только из указанных свойств. Это полезно, когда вы хотите выбрать только некоторые свойства из объекта.
*/
interface Iclient3 {
  name: string
  age: number
  email: string
}

// Тип на основе интерфейса
type TPickClient = Pick<Iclient3, 'name'|'email'>
// Интерфейс на основе интерфейса
interface IPickClient extends Pick<Iclient3, 'name'> { }

const clientPick: TPickClient = {
  name: 'asd',
  email: 'asd'
} // Содержит только 2 переданных свойста
const clientPick1: IPickClient = {
  name: 'asd'
} // Содержит только одно переданное свойство

/*
5. Omit<T, K>: Эта утилита принимает тип T и список свойств K и создает новый тип, который исключает указанные свойства из типа T.
*/
interface Iclietn4 {
  name: string
  age: number
  email: string
}

// Тип на основе интерфейса
type TOmitClient = Omit<Iclietn4, 'name'|'age'>
// Интерфейс на основе интерфейса
interface IOmitClient extends Omit<Iclietn4, 'name'> { }

const clietnOmit: TOmitClient = {
  email: 'asda'
} // Осталось только поле email
const clientOmit1: IOmitClient = {
  age: 23,
  email: 'qweq'
} // Осталось толко 2 поля age | email

/*
5. Record<K, T>: используется для создания типа, который представляет объект с набором свойств, где каждое свойство имеет тип T. 
*/
type TypeClientRecord = Record<'name'|'price', string| number>

const clientRecord: TypeClientRecord = {
  name: 'asd',
  price: 1
}
// или
type Fruit = 'apple' | 'banana' | 'orange';
type FruitInventory = Record<Fruit, number>;

const inventory: FruitInventory = {
  apple: 10,
  banana: 5,
  orange: 1
};

/*
6. В TypeScript есть ключевое слово ReturnType, которое позволяет определить тип возвращаемого значения функции. ReturnType может быть полезным, когда вы хотите получить тип результата функции, чтобы использовать его в других местах в коде.
*/

type TypeGetName = () => string
type Return = ReturnType<TypeGetName> // string

/*
7. Extract: Эта утилита типов позволяет выбрать только те типы из объединения типов, которые совпадают с указанным типом.
*/
type Animal = "cat" | "dog" | "bird";
type Cat = Extract<Animal, "cat">; // "cat"

/*
8. 2. Exclude: В отличие от Extract, Exclude позволяет исключить из объединения типов определенные типы.
*/
type Animal1 = "cat" | "dog" | "bird";
type NonCats = Exclude<Animal1, "cat">; // "dog" | "bird"

/*
9. NonNullable: NonNullable используется для создания нового типа, в котором отсутствуют null 
*/
type Value = string | null | undefined;
type NonNullableValue = NonNullable<Value>; // string