// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// function cutString(str, n){
//     let newArr = [];
//     for (let i = 0; i < str.length; i += n) {
//        newArr.push(str.substring (i, Math.min(str.length, i + n)))
//     }
//     return newArr
// }
//
// console.log(cutString('наслаждение', 3));



//-----------------------------------------------------------------------------------------------------



// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let newArr = []
// let str = 'Каждый охотник желает знать'
// function delete_characters(str, length){
//     newArr = str.split(' ')
//     for (const item of newArr) {
//         if(item.length === length){
//             return item
//         }
//     }
// }
//
// console.log(delete_characters(str, 7));



//-----------------------------------------------------------------------------------------------------




// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP"
// function insert_dash(str){
//      return str
//          .replaceAll(' ', '-')
//          .toUpperCase()
//
// }
//
// console.log(insert_dash(str));




//-----------------------------------------------------------------------------------------------------



// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// function Uper(arg){
//     return  arg.replace(arg[0],arg[0].toUpperCase())
//
// }
//
// console.log(Uper('hello'));
//



//-----------------------------------------------------------------------------------------------------


// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// let arr = []
// arr.push(n1, n2, n3)
// let newArr = []
//
// ----
// for (let i = 0; i < arr.length; i++) {
//         const item = arr[i];
//         if (item.includes('.')) {
//             newArr.push(item.replaceAll('..', ' '))
//         } else if (item.includes('-')) {
//             newArr.push(item.replaceAll('---', ' '))
//         } else if (item.includes('_')) {
//             newArr.push(item.replaceAll('__', ' '))
//         }
// }
// console.log(newArr)



//-----------------------------------------------------------------------------------------------------




// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.


// ПОВИННО БУТИ БЕЗ КОМЕНТАРЯ//
// let arr = [];
// let arr1 = []
// let arr2 = []
// function randomNum(arr, arr2, arr3) {
//     for (let i = 0; i < 100; i++) {
//         arr.push(Math.floor(Math.random() * 100))
//         arr2.push(Math.floor(Math.random() * 100))
//         arr3.push(Math.floor(Math.random() * 100))
//     }
// }
// randomNum(arr, arr1, arr2)


/*- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort*/

// let result = arr1.sort((a, b) => b - a );
// console.log(result)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)

// let result = arr2.filter(value => value % 2 === 0 && value > 0);
// console.log(result)

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// str = 'hello world, my name is timofii';
//
// let capitalize = (str) =>
//     str
//         .split(' ')
//         .map(value => value[0].toUpperCase() + value.slice(1))
//         .join(' ')
// console.log(capitalize(str));



//-----------------------------------------------------------------------------------------------------



// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

//
let str = 'someeMAIL@i.ua'
function checkEmail (email){
        if (email.slice(0, email.indexOf('@')).length >= 6 && email.includes('@')) {
        }else {throw new Error('Oops...fault')}
        if (((email.slice(email.indexOf('@'), email.indexOf('@') + 2)).includes('.')) === false) {
        }else {throw new Error('Oops...fault')}



}
checkEmail(str)




//-----------------------------------------------------------------------------------------------------

// - є масив let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules


// coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// let result = coursesArray.sort((a, b) => b.modules.length - a.modules.length);
// console.log(result)
//

//-----------------------------------------------------------------------------------------------------






// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

// let str1 = "Астрономия это наука о небесных объектах";
// let symb = "о"
//
// newArr = []
// let result
//
// function count(str1, stringsearch) {
//     for (let i = 0, j = 0; i < str1.length; i++) {
//         if(str1[i] === stringsearch){
//              j += 1
//         }
//         result = j
//     }
//     return result
//
// }
//
// console.log(count(str1, symb));
// //



//-----------------------------------------------------------------------------------------------------





// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

// let str = "Сила тяжести приложена к центру масс тела";
// function cutString(str, n){
//     let result = str.split(' ');
//     for (let i = 0; i < n; i++) {
//         if(result.length >= 6){
//             result.pop()
//         }else{}
//     }
//     return result.join(' ')
// }
//
// console.log(cutString(str, 5));



//-----------------------------------------------------------------------------------------------------




// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - вісортувати книжки по кількості сторінок по зростанню

let arrBooks = [
    {title: 'Papasha', pageCount: 345, authors: ['Telesik'], genre: ['fantasy']},
    {title: 'Yogufurt', pageCount: 2345, authors: ['Nick', 'Vasya'], genre: ['detective']},
    {title: 'BlokadaVS', pageCount: 456, authors: ['Roma'], genre: ['horror', 'detective']},
    {title: 'Holy Land', pageCount: 675, authors: ['Sasha', 'Oleg', 'Olya'], genre: ['action movie', 'horror', 'detective']},
    {title: 'Lusya', pageCount: 151, authors: ['Serhiy', 'Tolik'], genre: ['fantasy']}
];


// -знайти наібльшу книжку.

// function result(books) {
//     books.sort((a, b) => b.pageCount - a.pageCount)
//     return books[0]
// }
// console.log(result(arrBooks));


//-----------------------------------------------------------------------------------------------------


// - знайти книжку/ки з найбільшою кількістю жанрів

//
let result = (arr) => {
    let j = arr[0]
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if(j.genre.length < item.genre.length){
            j.genre = item.genre
        }
    }
    return j
}

console.log(result(arrBooks));

// - знайти книжку/ки з найдовшою назвою

// let result = (arr) => {
//     let j = arr[0]
//     debugger
//     for (let i = 0; i < arr.length; i++) {
//         const item = arr[i];
//         if(j.title.length < item.title.length){
//             j.title = item.title
//         }
//     }
//     return j
//
// };
// console.log(result(arrBooks));

// - знайти книжку/ки які писали 2 автори


// arrBooks.filter(book => {
//  if(book.authors.length === 2){
//      console.log(book)
//  }
// });

// - знайти книжку/ки які писав 1 автор

// arrBooks.filter(book => {
//  if(book.authors.length === 1){
//      console.log(book)
//  }
// });

// - вісортувати книжки по кількості сторінок по зростанню

// let result = arrBooks.sort((a, b) => a.pageCount - b.pageCount);
// console.log(result)







