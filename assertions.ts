// Утверждения - когда тип заранее не известен, и нужно самостоятельно указать его

const inputElement = document.querySelector('input');
const value1 = inputElement?.value // тс ставит ? так как возможно это будет не тот элемент
const value2 = (inputElement as HTMLInputElement).value // теперь все ок, так как мы принудительно задали тип элемента - as HTMLInputElement - 1 способ
const value3 = (<HTMLInputElement>inputElement).value // тоже самое, только указали тип вначале - 2 способ

// NOT NULL ASSERTIONS--! - оператор, позволяет указать, что возвращаемый тип не может быть NULL или UNDEFINED

const getLength = (text: string | null) => {
  return text!.length
}

getLength(null)
getLength('tere')