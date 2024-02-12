/*
Добавленное перед определением функции ключевое слово async делает функцию асинхронной. Возвращаемое значение такой функции автоматически оборачивается в Promise.
*/

// async function getNumber(num) {
//   return num;
// }
// getNumber(2)
//   .then((result) => console.log(result));

/*
Ключевое слово await используется, чтобы дождаться выполнения асинхронной операции
*/
// async function timer() {
//   await new Promise((resolve) => {      //await заставляет ожидать, пока промис не будет завершен.
//     setTimeout(() => {
//       console.log('Промис завершен!');
//       resolve();
//     }, 3000)
//   });
//   console.log('Теперь выведусь я :)')   //только после завершения промиса будет выведено.
// }
// timer();

// async function timer1() {
//   new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('У меня нет await, по этому программа продолжит свое выполнение без меня, а я потом догоню');
//       resolve();
//     }, 3000)
//   });
//   console.log('А тут я первый! Так как я синхронная функция :)')
// }
// timer1();

/*
Ассинхронные функции так же можно использовать с try...catch...
*/

// async function getData(url) {
//   try {
//     const response = await fetch(url);
//     if(!response.ok) {
//       throw new Error(`Ошибка запроса: ${response.status}`)
//     }
//     const data = await response.json()
//     return data
//   } catch (e) {
//     console.log(e.message)
//   }
// }
// getData('https://jsonplaceholder.typicode.com/posts/1')
//   .then(result => console.log(result.id, result.title))
