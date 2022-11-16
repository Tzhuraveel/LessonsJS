// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function par(a, b) {
    let result = (a + b) * 2;
    console.log(result)
    return result;
}

let a = par(5, 15);
console.log(a);

console.log('-----------------------------')


// - створити функцію яка обчислює та повертає площу кола з радіусом r

function radius(Pi, r) {
    let result = (r * r) * Pi;
    console.log(result);
    return result
}

radius(3.14, 7)

console.log('-----------------------------')


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function parCylinder(r, h, Pi) {
    let result = 2 * Pi * r * h;
    console.log(result);
    return result;
}

parCylinder(7, 18, 3.14)

console.log('-----------------------------')

// - створити функцію яка приймає масив та виводить кожен його елемент

function array(arr) {
    for (const arrElement of arr) {
        console.log(arrElement)
    }

}

array([1, 2, 3, 4]);

console.log('-----------------------------')

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function parText(someText) {
    document.write(`<p>${someText}</p>`)

}
parText('hello world')
console.log('-----------------------------')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulText(liText){
    document.write(`<ul>
        <li>${liText}</li>
        <li>${liText}</li>
        <li>${liText}</li>
       </ul>`)
    document.write('----------------------')
}
ulText('hello')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createUl(someText, numberElements){

    document.write(`<ul>`)
    for (let i = 0; i < numberElements; i++) {
        document.write(`<li>${someText}</li>`)
    }
    document.write(`</ul>`)
}
createUl('interfere', 6)
document.write('----------------------')
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function acceptsArr(array) {
    document.write(`<ul>`)
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`)
    }
    document.write(`</ul>`)
}
acceptsArr([234, 'hello', true, !'okten']);

document.write('----------------------')
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function arrUser(array){
    for (const user of array) {
        document.write(`<div class="users">
            <span>${user.name}</span> ${user.age} ${user.id}
        </div>`)
    }
}

let users = [
    {name: 'vasya', age: 31, id: 0},
    {name: 'olya', age: 35, id: 1},
    {name: 'max', age: 31, id: 2},
    {name: 'tima', age: 45, id: 3},
    {name: 'sasha', age: 15, id: 4},
    {name: 'oleg', age: 67, id: 5},
];
arrUser(users)

document.write('----------------------')


// - створити функцію яка повертає найменьше число з масиву

function smallestNum(num){
    for (let i = 0; i < num.length; i++) {
       if(num[i] < num[0]){
          num[0] = num[i]
       }
    }
    console.log(num[0])
    return num[0]
}



let numbers = [2341, 534, 678, 250, 234];
smallestNum(numbers);




//
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13


function listNum(array){
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}

let arrayNum = [10, 20, 30, 20, 10, 20];
listNum(arrayNum)
console.log(listNum(arrayNum))
