/*
Для просмотра примера раскомментируй строку с однострочным комментарием --> //
Регулярные выражения (или RegExp) - это мощный инструмент для работы с текстом в JavaScript. Они позволяют выполнить поиск, замену и сопоставление текста с определенным шаблоном. Регулярные выражения в JavaScript представлены объектом RegExp.

  1.Создание регулярных выражений:
1) Используя синтаксис /паттерн/флаг - const regExp = /like/i
2) Используя конструктор - new RegExp("pattern", "flags").
*/
// const regExp = /like/i;
// const rexExp = new RegExp('like', 'i');

/*
  2.Методы регулярных выражений.
1)str.match(regExp) - вернет массив в формате ['найденное совпадение', индекс вхождения, входную строку]
  в случае если совпадение будет или NULL если нет совпадений.
  Если указать флаг g - global, то вернет массив с найденными значениями или NULL если нет совпадений.
*/
// console.log('i like car'.match(/like/)); //[ 'like', index: 2, input: 'i like car', groups: undefined ]
// console.log('i like like car'.match(/like/g)); //[ 'like', 'like' ]
// console.log('i hate car'.match(/like/)); //null
/*
2)str.replace(regExp, 'new') - в случае совпадения заменит найденное на new и вернет новую строку.
  Если совпадений нет - вернет строку без изменений.
  Если не задать new - заменит найденное на undefined.
*/
// console.log('i like JS'.replace(/JS/, 'Python')); // i like Python
// console.log('i like JS'.replace(/TS/, 'Python')); // i like JS
// console.log('i like JS'.replace(/JS/)); // i like undefined
/*
3)str.search(rexExp) - ишет шаблон в строке, и в случае совпадения возвращает индекс первого вхождения,
  если совпадений нет - вернет -1.
*/
// console.log('i like JS JS'.search(/JS/)); // 7
// console.log('i like Python'.search(/JS/)); // -1
/*
4)regExp.test(str) - вернет true, если найдет шаблон в str, иначе вернет false. Не путайте, сначала идет 
  regExp, у него вызываем метод test и аргументом передаем str!
*/
// console.log(/JS/.test('i like JS')); // true
// console.log(/Python/.test('i like JS')); // false
/*
5)reg.Exp.exec(str) - Ищет regExp в строке, и в случае совпадения возвращает массив с результатами
  первого совпадения, или NULL, если совпадений нет. Не путайте, сначала идет regExp, у него
  вызываем метод exec и аргументом передаем str!
*/
// console.log(/JS/g.exec('i like JS JS')); // [ 'JS', index: 7, input: 'i like JS', groups: undefined ]
// console.log(/JS/g.exec('i like Python')); // null

/*
  3.Символьные классы.
1) /./ - находит первый любой символ, кроме \ Если укзать флаг g то выведет массив с каждым символом строки.
  Если строка пустая, вернет NULL.
*/
// console.log('i like JS'.match(/./)); //[ 'i', index: 0, input: 'i like JS', groups: undefined ].
// console.log('i like JS'.match(/./g)); //['i', ' ', 'l','i', 'k', 'e',' ', 'J', 'S'].
// console.log(''.match(/./)); // null
/*
2) /\d/ - находит первую любую цифру. /\D/ - находит первый символ, который не является цифрой.
*/
// console.log('i like ES6'.match(/\d/)); //[ '6', index: 9, input: 'i like ES6', groups: undefined ].
// console.log('i like ES6'.match(/\D/)); //[ 'i', index: 0, input: 'i like ES6', groups: undefined ].
/*
3)/\w/ - находит первую ЛАТИНСКУЮ букву, цифру или символ _. /\W/ - найдет любой символ кроме /\w/.
*/
// console.log('i like JS'.match(/\w/)); //[ 'i', index: 0, input: 'i like JS', groups: undefined ].
// console.log('_i like JS'.match(/\w/)); //[ '_', index: 0, input: '_i like JS', groups: undefined ].
// console.log('777i like JS'.match(/\w/)); //[ '7', index: 0, input: '777i like JS', groups: undefined ].
// console.log('777i_like_JS!'.match(/\W/)); //[ '!', index: 12, input: '777i_like_JS!', groups: undefined ].
/*
4)/\s/ - находит первый пробел. /\S/ - находит любой символ кроме пробела.
*/
// console.log('i like_JS!'.match(/\s/)); //[ ' ', index: 1, input: 'i like_JS!', groups: undefined ].
// console.log(' i_like_JS!'.match(/\S/)); //[ 'i', index: 1, input: ' i_like_JS!', groups: undefined ].
/*
  4.Флаги.
1) g - глобальный поиск, ищет все совпадения вместо первого совпадения.
*/
// console.log('i like JS'.match(/i/)); //[ 'i', index: 0, input: 'i like JS', groups: undefined ].
// console.log('i like JS'.match(/i/g)); //[ 'i', 'i' ].
/*
2)i - делает поиск регистронезависимым.
*/
// console.log('i like JS'.match(/js/)); //null.
// console.log('i like JS'.match(/js/i)); //[ 'JS', index: 7, input: 'i like JS', groups: undefined ].
/*
3)m - многострочный поиск. Немного забегу вперед, дальше это будет разъяснено. Он меняет поведение 
  якорей ^(начало строки) и $(конец строки).
*/
// console.log(`1.i\n2.like\n3.JS`.match(/^\d/g)); //[ '1' ].
// console.log(`1.i\n2.like\n3.JS`.match(/^\d/gm)); //[ '1', '2', '3' ].
// console.log('i1\nlike2\nJS3'.match(/\d$/g)) //[ '3' ].
// console.log('i1\nlike2\nJS3'.match(/\d$/gm)) //[ '1', '2', '3' ].
/*
4)s - однострочный поиск. Этот флаг меняет поведение /./ (поиск любого символа кроме /), и включает
  / в поиск.
*/
// console.log('like\nJS'.match(/like.JS/g)); //null.
// console.log('like\nJS'.match(/like.JS/gs)); //[ 'like\nJS' ].
/*
5)u - включает поддержку с юникодными символами.
*/
// console.log(/🌍/.test('hi, 🌍')); //false.
// console.log(/🌍/u.test('hi, 🌍')); //true.
/*
6)y - позволяет поиск с определенной позиции в строке, с использованием regexp.lastIndex - указание
  индекса начала поиска(по умолчанию = 0)
*/
// const str = 'i like JS'; 
// const rexExp = /like/yg;
// console.log(rexExp.exec(str)); // null, так как по индексу 0 стоит i
// rexExp.lastIndex = 2; //перемещаем индекс начала поиска на 2
// console.log(rexExp.exec(str)); // [ 'like', index: 2, input: 'i like JS', groups: undefined ], найдено!
// rexExp.lastIndex = 3; // перемещаем индекс на 3.
// console.log(rexExp.exec(str)); // null.

/*
  5.Якоря - спецсимволы, используются для указания позиции соответствия шаблона в строке текста.

1) ^ - начало строки. Будет искать соответствия только в начале строки. Начинается ли строка с шаблона.
*/
// console.log(/^\d\d/.test('77 i like JS')) //true, строка начинается с 2 цифр
// console.log(/^\d\d/.test('i like JS 77'))  //false
/*
2) $ - конец строки. Ищет, заканчивается ли строка шаблоном
*/
// console.log(/\d\d$/.test('77 i like JS')) //false
// console.log(/\d\d$/.test('i like JS 77'))  //true, строка заканчивается на 2 цифры
/*
3)^....$ - проверка, что строка состоит только из шаблона
*/
// console.log(/^\d\d$/.test('77')) //true. Строка состоит из 2 цифр.
// console.log(/^\d\d$/.test('i77')) //false
/*
4) \b - граница слова.  \B не граница слова.
*/
// console.log(/\bJS/.test('i likeJS!')) //false, так как JS должно быть на границе слова в конце.
// console.log(/JS\b/.test('i likeJS!')) // true
// console.log(/\bJS/.test('i JSlike!')) // true
// console.log(/JS\B/.test('i likeJS!')) // false, так как JS НЕ должно быть на конце границы слова.
// console.log(/JS\B/.test('i JSlike!')) // true.
/*
5) Для того, что бы найти спецсимвол в строке ([, ^, $, (), ., |, ?, *, +, /), их нужно экранировать
  с помощью \. Если создаете шаблон через new, то необходимо использовать \\ (два слэша.)
*/
// console.log(/\^/.test('i like JS ^')) // true
// console.log(/^/.test('i like JS')) // true, но на самом деле символа нет в строке.
// console.log(/\^\$\./.test('^$.')) // true
// console.log(/\^\$\./.test('^$')) // false.
/*
  6. Диапазоны и наборы.
1)[a-z] - находит любой символ из диапазона. [а-я] - возможно вкючать кириллицу(ё не входит).
*/
// console.log(/[a-z]/.test('f')) //true
// console.log(/[a-e]/.test('f')) //false
/*
2)[abxz] - находит любой из указанных символов.
*/
// console.log(/[axs]/.test('x')) //true
// console.log(/[axs]/.test('v')) //false
/*
3)[0-9] - диапазон цифр. Любая цифра от 0 до 9
*/
// console.log(/[0-9]/.test(4)) // true
// console.log(/[0-9]/.test('4')) // true
// console.log(/[0-9]/.test('a')) // false
/*
4)[^a-f] - исключающий диапазон. Найдет любой смвол кроме указанного в диапазоне.
*/
// console.log(/[^a-f]/.test('a')) //false
// console.log(/[^a-f]/.test('g')) //true
/*
5)Без экранирования в [] можно писать '. + ()'. '-' не экранируется в начале. "^" экранируется в начале.
  "]" экранируется всегда.

6) Можно комбинировать диапазоны и наборы.
*/
// console.log(/[a-z][0-9]/i.test('a5')) //true
// console.log(/[a-z][0-9]/i.test('a')) //false
/*
  7. Квантификаторы. Используются для определения колличества повторений, которые должны соответствовать
    выражению.
1){5} - точное кол-во повторений.
*/
// console.log(/\w{5}/.test('hello')) //true
// console.log(/\w{5}/.test('hell')) //false
/*
2){n1, n2} - от n1 до n2 повторений. Можно опустить n2, тогда будет просто от {n1,}
*/
// console.log(/\w{2,5}/.test('hello')) //true
// console.log(/\w{2,5}/.test('hi')) //true
// console.log(/\w{2,5}/.test('i')) //false
// console.log(/\w{2,}/.test('hello')) //true
/*
3)+ - от 1 и более
*/
// console.log(/\w+/.test('I like JS')) //true
/*
4)? - делает символ не обязательным
*/
// console.log(/like?/.test('I like JS')) //true
// console.log(/lik/.test('I like JS')) //true
/*
5)* от 0 и больше
*/
// console.log(/1\d0*/.test('15'))// true
// console.log(/1\d0*/.test('150'))// true
// console.log(/1\d0*/.test('150000'))// true
/*
  8. Жадные и ленивые алгоритмы.
По умолчанию включен жадный режим. Для включения ленивого режима нужно поставить ? перед условием,
  к которому нужно применить ленивый алгоритм. Принцип работы на примере строки 'I "like" or "love JS"':
  /".+"/ -> Доходит то первой кавычки, совпало, идет дальше, все буквы совпадают -> дошел до второй кавычки,
  она попадает под квантификатор .+, идет дальше, берет все символы до конца строки, так как они совпадают,
  потом разворачивается и идет от конца к началу, находит первые с конца кавычки и останавливается.
*/
// console.log('I "like" or "love" JS'.match(/".+"/g)) //[ '"like" or "love"' ] - жадность
/*
В ленивом режиме алгоритм будет проверять следующее условие после ?. На прошлом примере это выглядит так
  нашел первые ковычки, дальше каждый символ проверяет и так же проверяет, нет ли после него кавычек.
  как только это условие будет выполненно, остановит поиск.
*/
// console.log('I "like" or "love" JS'.match(/".+?"/g)) //[ '"like"', '"love"' ] - лень.
/*
Если это квантификатор ?, то ленивым будет ??.
*/
/*
  9.Группировка. Группы захвата.
Для группировки - создании группы захвата, используется синтаксис (). Особенность такого подхода 
  заключается в том, что можно помещать часть совпадения в отдельный массив, обращаться к этому
  содержимому через $. Например
*/
// console.log('I like JS'.match(/(li)(ke)/)); //[ 'like', 'li', 'ke']
// console.log('I like JS'.replace(/(\w+) (\w+) (\w+)/i, '$3 $1 $2')) //JS I like
/*
Для того, что бы запретить доступ к группе через $, перед ней нужно поставить ?: Пример
*/
// console.log('I like JS'.replace(/(\w+) (?:\w+) (\w+)/i, '$3 $1 $2')) //$3 I JS
/*
  10. Опертор ИЛИ (OR) - |. Используется для указания, что нужно найти одно из перечисленного.
*/
// console.log(/JS|HTML|CSS/i.test('I like JS')) //true
// console.log(/JS|HTML|CSS/i.test('I like HTML')) //true
// console.log(/JS|HTML|CSS/i.test('I like CSS')) //true
// console.log(/JS|HTML|CSS/i.test('I like Python'))//false