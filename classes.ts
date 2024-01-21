// Классы
class Car {
  name: string
  price: number

  constructor(name: string, price: number) {
    this.name = name
    this.price = price
  }

  public getInfo(): string {
    return `${this.name} - ${this.price}`
  } // public - по умолчанию, можно не указывать

  protected getInfo_2(): string {
    return `${this.name} - ${this.price}`
  } // protected - доступны в наследниках и в этом классе(см. Bus)

  // private или # (Доступны для вызова только внутри класса, в котором обьявлены)
  #getName(): string {
    return `${this.name}`
  } // Доступны только в этом классе
  private getPrice(): string {
    return `${this.price}`
  } // Доступны только в этом классе
  test_private_1() {
    this.#getName
  } // Доступно!
  test_private_2() {
    return this.getPrice
  } // Доступно!
}

// protected свойтва и методы. Доступны в обьявленном классе и классам, которые от него наследуются
class Bus extends Car {
  constructor(name: string, price: number) {
    super(name, price)
  }
  test() {
    return this.getInfo_2()
  } // Доступно!
}

new Car('BMW', 100_000).getInfo()

// Модификаторы свойств и методов классов - public, private, 