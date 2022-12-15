// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал
// элемент с id="text".


// let div = document.createElement('div');
// div.setAttribute('id', 'text')
// div.style.width = '300px'
// div.style.height = '300px'
// div.style.background = 'silver'
// document.body.appendChild(div)
//
// let button = document.createElement('button');
// document.body.appendChild(button)
//
// button.onclick = function (e){
//     div.style.display = 'none'
// }


//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.


// let button = document.createElement('button');
// document.body.appendChild(button)
// button.onclick = function (e) {
//     button.style.display = 'none';
// };


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з
// інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let input = document.createElement('input');
// input.setAttribute('type', 'number')
// document.body.appendChild(input)
//
// let button = document.createElement('button');
// document.body.appendChild(button)
//
// button.onclick = function (e) {
//     if(input.value >= 18 && input.value <= 121){
//         alert('Хароош')
//     }else if(input.value < 18 && input.value > 0){
//         alert('Не хароош')
//     }else if(input.value.length === 0){
//         alert('hey')
//     }else{alert('@$#%$&*&')}
// };

// - Создайте меню, которое раскрывается/сворачивается при клике

//--------------------------------------


//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

//--------------------------------------

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
//
//


// let arr = ['Скунс', 'Циган', 'Бидло', 'Спалахуйка', 'Невдаха'];
//
// let input = document.createElement('input');
// input.setAttribute('type', 'text')
// document.body.append(input)
//
// let button = document.createElement('button');
// document.body.append(button)
//
//
// button.onclick = function (e){
//     for (let i = 0; i < arr.length; i++) {
//         const word = arr[i];
//         if(word === input.value){
//             alert('Shut up')
//         }else if(word !== input.value){
//             return alert('Welcome')
//         }
//
//     }
// }

// --------------------------------------
    // - Сворити масив не цензцрних слів.
    // Сворити інпут текстового типу.
    // Потрібно перевіряти чи не містить ціле речення в собі погані слова.
    // Кинути алерт з попередженням у випадку якщо містить.
    // Перевірку робити при натисканні на кнопку



// let arr = ['Скунс', 'Циган', 'Бидло', 'Спалахуйка', 'Невдаха'];
// let input = document.createElement('input');
// input.setAttribute('type', 'text')
// document.body.append(input)
//
// let button = document.createElement('button');
// document.body.append(button)
//
// button.onclick = function (e){
//     for (let i = 0; i < arr.length; i++) {
//         const word = arr[i];
//         if(input.value.includes(word)){
//             return alert('Привітик')
//         }else if(!input.value.includes(word)){
//             return  alert('Пока')
//         }
//
//     }
// }




    // --------------------------------------


// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должніы отправляться к этому пункту в тексте
//
//






// // -- взять массив пользователей
// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// // Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе
// // так и по отдельности. 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false) 2й -
// // оставляет старше 29 лет включительно 3й - оставляет тех у кого город киев Данные выводить в документ
//
//
// let div = document.createElement('div');
//
// div.setAttribute('id', 'generalDiv')
// document.body.appendChild(div)
//
// let inputFirst = document.createElement('input');
// let inputSecond = document.createElement('input');
// let inputThird = document.createElement('input');
//
//
// inputFirst.setAttribute('type', 'checkbox');
// inputSecond.setAttribute('type', 'checkbox');
// inputThird.setAttribute('type', 'checkbox');
//
// div.append(inputFirst, inputSecond, inputThird)
//
