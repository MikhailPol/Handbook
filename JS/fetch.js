/*
С помощью функции fetch() можно отправлять сетевые запросы на сервер — как получать, так и отправлять данные. Метод возвращает промис с объектом ответа, где находится дополнительная информация (статус ответа, заголовки) и ответ на запрос.

Синтаксис => fetch('url', *{options})
url - адрес, по которому нужно сделать запрос;
{options}(необяз.) - объект конфигурации, в котором содержится:
  method: 'GET'(по умолч.), 'POST', 'PUT' и др.
  headers: {'Content-type': 'application/json; charset=UTF-8'} - Объект с заголовками запроса
  body: JSON.stringify(newPost) - тело запроса (обычно для POST или PUT запросов, содержит данные для отправки на сервер).
  credentials: 'include' - определяет, должны ли отправляться куки и заголовки авторизации с запросом.
  mode: Режим запроса (например, "same-origin", "cors", "no-cors").
  cache: Режим кэширования (например, "default", "no-store", "reload", "no-cache").
  redirect: Режим перенаправления (например, "follow", "error", "manual").

Результатом вызова fetch() будет Promise, в котором будет содержаться специальный объект ответа Response. У этого объекта есть два важных для нас поля:
  ok — принимает состояние true или false и сообщает об успешности запроса;
  json — метод, вызов которого, возвращает результат запроса в виде json.

Пример.
*/
// const url = 'https://jsonplaceholder.typicode.com/posts/1';
// fetch(url)                                            //выполняем запрос - получаем промис
//   .then(response => {                                 //работаем с промисом
//     if(!response.ok){                                 //Проверяем, если запрос не прошел
//       throw new Error(`Error: ${response.status}`);   //выбрасываем исключение с кодом ошибки
//     }
//     return response.json();                           //возвращаем промис с готовыми данными
//   })
//   .then(data => {                                     //работаем с данными
//     const id = data.id;
//     const title = data.title;
//     const body = data.body;
//     console.log(`${id}\n${title}\n${body}`);
//   })
//   .catch((e) => console.log(e.message));              // в случае ошибки запроса выводим ошибку в консоль
