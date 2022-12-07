// - создать массив с 20 числами.
let arr = [1, 3245, 212, 10,  63456, 123, 20, 14,  41235, 412, 4567, 231, 678789, 245363456, 11234, 678, 2345, 678, 434556, 266];
// -- при помощи метода sort и колбека  отсортировать массив.

// let result = arr.sort((a, b) => a - b);
// console.log(result)

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

// let result = arr.sort((a,b ) => b - a)
// console.log(result)

// -- при помощи filter получить числа кратные 3

// let result = arr.filter(number => number % 3 === 0)
// console.log(result);

// -- при помощи filter получить числа кратные 10

// let result = arr.filter(number => number % 10 === 0)
// console.log(result);

// -- перебрать (проитерировать) массив при помощи foreach()

// arr.forEach(number => console.log(number))

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let result = arr.map(number => number * 3)
// console.log(result)



// - создать массив со словами на 15-20 элементов.

let arrWords = ['hello', 'dry', 'immediately', 'destination', 'direction', 'accompaniment', 'appearance', 'disgusting', 'disguise', 'offer', 'arrogant', 'disappear', 'greedy', 'okten', 'owe'];

// -- отсортировать его по алфавиту в восходящем порядке.

// let result = arrWords.sort((a, b) => {
//     if (a < b) {
//         return 1
//     }else if (a > b) {
//         return -1
//     }else if (a === b) {
//         return 0
//     }
// });
// console.log(result)

// -- отсортировать его по алфавиту  в нисходящем порядке.

// let result = arrWords.sort()
// console.log(result)

// -- отфильтровать слова длиной менее 4х символов

// let result = arrWords.filter((value) => value.length >= 4)
// console.log(result)

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// let newArr = arrWords.map(value => (value + '!'));
// console.log(newArr)




// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
//     let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];





let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// - відсортувати його за  віком (зростання , а потім окремо спадання)

// let result = users.sort((a, b) => a.age - b.age);
// console.log(result)

// let result = users.sort((a, b) => b.age - a.age);
// console.log(result)


// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// let result = users.sort((a, b) => a.name.length - b.name.length);
// console.log(result)

// let result = users.sort((a, b) => b.name.length - a.name.length);
// console.log(result)






// -- наисать функцию калькулятора с 2мя числами и колбеком

// function calc(a, b, action){
//     if(action === '+'){
//         return a + b;
//     }else if(action === '-'){
//         return a - b
//     }else if(action === '*'){
//         return a * b
//     }else if(action ==='/'){
//         return a / b
//     }
// }
//
// console.log(calc(5, 3, '+'));

// -- наисать функцию калькулятора с 3мя числами и колбеком

let calc = ''
